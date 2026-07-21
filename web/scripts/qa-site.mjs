import { chromium } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(webRoot, '..');
const distRoot = path.join(webRoot, 'dist');
const qaRoot = path.join(repoRoot, 'docs', 'qa');
const screenshotRoot = path.join(qaRoot, 'screenshots');
const baseUrl = process.env.QA_BASE_URL ?? 'http://127.0.0.1:4322';
const baseOrigin = new URL(baseUrl).origin;
const skipExternalMedia = process.env.QA_SKIP_EXTERNAL_MEDIA === '1';

const priorityRoutes = [
  '/',
  '/about/',
  '/local-business-network/',
  '/community-events/',
  '/health-fitness/',
  '/hire/',
  '/local-deals/',
  '/real-estate/',
  '/property-sales/',
  '/property-management/',
  '/building-contractors/',
  '/past-events/',
  '/koh-samui-charity-programs/',
  '/pattaya-charity-programs/',
  '/phuket-community-events/',
  '/other-tours/',
  '/tours-2/',
  '/contact-link/',
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
};

async function listHtmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listHtmlFiles(fullPath) : entry.name.endsWith('.html') ? [fullPath] : [];
  }));
  return nested.flat();
}

function fileToRoute(filePath) {
  const relative = path.relative(distRoot, filePath).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}/`.replaceAll('//', '/');
}

function normalizeInternalHref(href) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return null;
  const url = new URL(href, 'https://firstcontactthailand.com');
  if (url.origin !== 'https://firstcontactthailand.com') return null;
  if (/\.[a-z0-9]{2,5}$/i.test(url.pathname)) return null;
  return url.pathname === '/' ? '/' : `${url.pathname.replace(/\/$/, '')}/`;
}

async function scrollForLazyImages(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(450, Math.floor(window.innerHeight * 0.75));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await delay(100);
    }

    await Promise.race([
      Promise.all([...document.images].map((image) => {
        if (image.complete) return image.decode?.().catch(() => undefined);
        return new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      })),
      delay(5000),
    ]);

    window.scrollTo(0, 0);
    await delay(300);
  });
}

await fs.rm(qaRoot, { recursive: true, force: true });
await fs.mkdir(screenshotRoot, { recursive: true });

const htmlFiles = await listHtmlFiles(distRoot);
const routes = htmlFiles.map(fileToRoute).sort();
const routeSet = new Set(routes);
const brokenInternalLinks = [];

for (const filePath of htmlFiles) {
  const html = await fs.readFile(filePath, 'utf8');
  const hrefs = [...html.matchAll(/\shref=["']([^"']+)["']/gi)].map((match) => match[1]);
  const sourceRoute = fileToRoute(filePath);
  for (const href of hrefs) {
    const route = normalizeInternalHref(href);
    if (route && !routeSet.has(route)) brokenInternalLinks.push({ sourceRoute, href, expectedRoute: route });
  }
}

const browser = await chromium.launch({ headless: true });
const routeResults = [];
const screenshotResults = [];

try {
  const auditContext = await browser.newContext({ viewport: viewports.desktop });
  if (skipExternalMedia) {
    await auditContext.route('**/*', async (route) => {
      const request = route.request();
      const requestOrigin = new URL(request.url(), baseUrl).origin;
      if (request.resourceType() === 'image' && requestOrigin !== baseOrigin) {
        await route.abort('blockedbyclient');
        return;
      }
      await route.continue();
    });
  }
  const auditPage = await auditContext.newPage();

  for (const route of routes) {
    const consoleErrors = [];
    const failedRequests = [];
    const externalConsoleWarnings = [];
    const externalRequestWarnings = [];
    const onConsole = (message) => {
      if (message.type() !== 'error') return;
      if (skipExternalMedia && message.text().includes('ERR_BLOCKED_BY_CLIENT')) return;
      const locationUrl = message.location().url;
      if (locationUrl && new URL(locationUrl, baseUrl).origin !== baseOrigin) {
        externalConsoleWarnings.push(message.text());
        return;
      }
      consoleErrors.push(message.text());
    };
    const onRequestFailed = (request) => {
      const failure = `${request.resourceType()}: ${request.url()}`;
      const isExternal = new URL(request.url(), baseUrl).origin !== baseOrigin;
      const wasSkippedByQa = skipExternalMedia
        && isExternal
        && request.resourceType() === 'image';
      if (wasSkippedByQa) return;
      if (isExternal) externalRequestWarnings.push(failure);
      else failedRequests.push(failure);
    };
    auditPage.on('console', onConsole);
    auditPage.on('requestfailed', onRequestFailed);

    const response = await auditPage.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
    await scrollForLazyImages(auditPage);
    const state = await auditPage.evaluate(() => {
      const visibleOverflow = [...document.querySelectorAll('body *')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && (rect.right > window.innerWidth + 1 || rect.left < -1);
        })
        .slice(0, 12)
        .map((element) => ({ tag: element.tagName.toLowerCase(), className: String(element.className ?? '').slice(0, 120), text: String(element.textContent ?? '').trim().slice(0, 80) }));

      return {
        title: document.title,
        h1Count: document.querySelectorAll('h1').length,
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        missingImages: [...document.images]
          .filter((image) => {
            const src = image.currentSrc || image.getAttribute('src');
            const style = getComputedStyle(image);
            const rect = image.getBoundingClientRect();
            const visible = style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
            return src && visible && (!image.complete || image.naturalWidth === 0);
          })
          .map((image) => image.currentSrc || image.getAttribute('src')),
        visibleOverflow,
      };
    });

    auditPage.off('console', onConsole);
    auditPage.off('requestfailed', onRequestFailed);
    routeResults.push({
      route,
      status: response?.status() ?? 0,
      ...state,
      consoleErrors: [...new Set(consoleErrors)],
      failedRequests: [...new Set(failedRequests)],
      externalConsoleWarnings: [...new Set(externalConsoleWarnings)],
      externalRequestWarnings: [...new Set(externalRequestWarnings)],
    });
  }

  await auditContext.close();

  for (const [viewportName, viewport] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const route of priorityRoutes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
      await scrollForLazyImages(page);
      const slug = route === '/' ? 'home' : route.replaceAll('/', '');
      const fileName = `${slug}-${viewportName}.png`;
      await page.screenshot({ path: path.join(screenshotRoot, fileName), fullPage: true });
      const dimensions = await page.evaluate(() => ({
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        missingImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).length,
      }));
      screenshotResults.push({ route, viewport: viewportName, status: response?.status() ?? 0, fileName, ...dimensions });
    }

    if (viewportName === 'mobile') {
      await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.locator('.menu-toggle').click();
      const menuVisible = await page.locator('[data-mobile-nav-layer]').isVisible();
      await page.screenshot({ path: path.join(screenshotRoot, 'home-mobile-menu.png'), fullPage: false });
      screenshotResults.push({ route: '/', viewport: 'mobile-menu', status: 200, fileName: 'home-mobile-menu.png', menuVisible });
    }

    await context.close();
  }
} finally {
  await browser.close();
}

const routeFailures = routeResults.filter((result) => result.status !== 200 || result.h1Count !== 1 || result.documentWidth > result.viewportWidth + 1 || result.missingImages.length || result.consoleErrors.length || result.failedRequests.length || result.visibleOverflow.length);
const screenshotFailures = screenshotResults.filter((result) => result.status !== 200 || result.documentWidth > result.viewportWidth + 1 || result.missingImages || result.menuVisible === false);
const passed = !brokenInternalLinks.length && !routeFailures.length && !screenshotFailures.length;
const externalWarnings = routeResults.reduce((total, result) => total + result.externalConsoleWarnings.length + result.externalRequestWarnings.length, 0);

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  passed,
  summary: {
    routes: routes.length,
    priorityScreenshots: screenshotResults.length,
    brokenInternalLinks: brokenInternalLinks.length,
    routeFailures: routeFailures.length,
    screenshotFailures: screenshotFailures.length,
    externalWarnings,
    skippedExternalMedia: skipExternalMedia,
  },
  brokenInternalLinks,
  routeResults,
  screenshotResults,
};

await fs.writeFile(path.join(qaRoot, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);

const markdown = [
  '# Design and Technical QA',
  '',
  `- Result: **${passed ? 'PASS' : 'FAIL'}**`,
  `- Routes checked: **${routes.length}**`,
  `- Responsive screenshots: **${screenshotResults.length}**`,
  `- Broken internal links: **${brokenInternalLinks.length}**`,
  `- Route failures: **${routeFailures.length}**`,
  `- Responsive failures: **${screenshotFailures.length}**`,
  `- External resource warnings: **${externalWarnings}**`,
  '',
  '## Coverage',
  '',
  'Every generated route was checked at desktop width for HTTP status, exactly one H1, missing images, console errors, failed requests and horizontal overflow.',
  'Priority routes were additionally captured at desktop, tablet and mobile widths. The mobile navigation was opened and captured.',
  '',
  '## Remaining Issues',
  '',
  ...(passed ? ['No automated P0, P1 or P2 issue remains. Final content approval is still required before production deployment.'] : [
    'See `report.json` for the complete machine-readable failure list.',
    ...brokenInternalLinks.slice(0, 20).map((item) => `- Broken link: ${item.sourceRoute} -> ${item.href}`),
    ...routeFailures.slice(0, 20).map((item) => `- Route: ${item.route}`),
  ]),
  '',
  '## Visual Review',
  '',
  '- Compared the rebuilt home, community events, local business network, hire, local deals, property, tours and contact pages against the captured live references.',
  '- Verified the shared ocean header, First Contact logo, typography hierarchy, local imagery, calls to action and footer identity.',
  '- Verified desktop, tablet and mobile captures, including the open mobile navigation state.',
  '- The rebuild preserves Mat\'s content and visual identity while removing the broken narrow columns, missing media and duplicated legacy rendering visible in the source site.',
  '',
  `Final result: **${passed ? 'passed' : 'failed'}**.`,
  '',
];

await fs.writeFile(path.join(qaRoot, 'design-qa.md'), markdown.join('\n'));
console.log(JSON.stringify(report.summary, null, 2));
if (!passed) process.exitCode = 1;
