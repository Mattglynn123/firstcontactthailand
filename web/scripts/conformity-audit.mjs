import { chromium } from 'playwright';
import { XMLParser } from 'fast-xml-parser';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(webRoot, '..');
const distRoot = path.join(webRoot, 'dist');

const label = process.env.AUDIT_LABEL ?? 'staging';
const baseUrl = new URL(process.env.AUDIT_BASE_URL ?? 'https://firstcontactthailand.com/staging/');
const routeSource = process.env.AUDIT_ROUTE_SOURCE ?? 'dist';
const wordpressPostTypes = (process.env.AUDIT_WORDPRESS_POST_TYPES ?? 'page')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);
const outputRoot = path.join(repoRoot, 'docs', 'conformity');
const screenshotRoot = path.join(outputRoot, 'screenshots', label);
const reportPath = path.join(outputRoot, `${label}.json`);
const cacheToken = Date.now().toString(36);

const viewportCatalog = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
};

const requestedViewports = (process.env.AUDIT_VIEWPORTS ?? 'desktop,mobile')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const priorityRoutes = new Set([
  '/',
  '/about/',
  '/local-business-network/',
  '/community-events/',
  '/health-fitness/',
  '/hire/',
  '/local-deals/',
  '/real-estate/',
  '/property/',
  '/property-sales/',
  '/property-management/',
  '/building-contractors/',
  '/buyers-agent/',
  '/past-events/',
  '/tours-2/',
  '/other-tours/',
  '/contact-link/',
]);

const screenshotMode = process.env.AUDIT_SCREENSHOTS ?? 'all';
const requestedRoutes = new Set((process.env.AUDIT_ROUTES ?? '')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean)
  .map((value) => value === '/' ? '/' : `/${value.replace(/^\/+|\/+$/g, '')}/`));

async function listHtmlFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(fullPath);
    return entry.name.endsWith('.html') ? [fullPath] : [];
  }));
  return nested.flat();
}

function fileToRoute(filePath) {
  const relative = path.relative(distRoot, filePath).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  const route = relative.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  return `/${route}/`.replaceAll('//', '/');
}

async function routesFromDist() {
  return (await listHtmlFiles(distRoot)).map(fileToRoute).sort();
}

async function readXmlUrls(url) {
  const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' } });
  if (!response.ok) throw new Error(`Unable to read sitemap ${url}: ${response.status}`);
  const xml = (await response.text()).replace(/^\uFEFF+/, '');
  const parsed = new XMLParser({ ignoreAttributes: false }).parse(xml);
  const entries = parsed.sitemapindex?.sitemap ?? parsed.urlset?.url ?? [];
  return (Array.isArray(entries) ? entries : [entries]).map((entry) => entry.loc).filter(Boolean);
}

async function routesFromWordPressSitemap() {
  const sitemapIndex = new URL('/wp-sitemap.xml', baseUrl.origin).href;
  const childSitemaps = await readXmlUrls(sitemapIndex);
  const sitemapUrls = childSitemaps.filter((url) => wordpressPostTypes.some((type) => (
    new RegExp(`wp-sitemap-posts-${type.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-\\d+\\.xml`, 'i').test(url)
  )));
  if (!sitemapUrls.length) throw new Error(`No WordPress sitemap was found for: ${wordpressPostTypes.join(', ')}`);
  const pageUrls = [];

  for (const sitemapUrl of sitemapUrls) {
    pageUrls.push(...await readXmlUrls(sitemapUrl));
  }

  const allowedOrigin = baseUrl.origin;
  return [...new Set(pageUrls
    .map((value) => new URL(value))
    .filter((url) => url.origin === allowedOrigin)
    .map((url) => url.pathname === '/' ? '/' : `${url.pathname.replace(/\/$/, '')}/`))]
    .sort();
}

function routeToUrl(route) {
  const url = new URL(route.replace(/^\//, ''), baseUrl);
  url.searchParams.set('fct-audit', cacheToken);
  return url.href;
}

function routeToSlug(route) {
  if (route === '/') return 'home';
  return route.replace(/^\//, '').replace(/\/$/, '').replaceAll('/', '__');
}

async function scrollEntirePage(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const height = document.documentElement.scrollHeight;
    const desiredStep = Math.max(900, Math.floor(window.innerHeight * 1.5));
    const step = Math.max(desiredStep, Math.ceil(height / 180));
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      await wait(25);
    }

    await Promise.race([
      Promise.all([...document.images].map((image) => {
        if (image.complete) return image.decode?.().catch(() => undefined);
        return new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      })),
      wait(4000),
    ]);

    window.scrollTo(0, 0);
    await wait(250);
  });
}

async function extractPageState(page) {
  return page.evaluate(() => {
    const clean = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
    const visible = (element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
    };
    const box = (element) => {
      const rect = element.getBoundingClientRect();
      return {
        x: Math.round(rect.x + window.scrollX),
        y: Math.round(rect.y + window.scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    };

    const headingElements = [...document.querySelectorAll('h1, h2, h3')].filter(visible);
    const headings = headingElements.map((element) => ({ level: element.tagName.toLowerCase(), text: clean(element.textContent), ...box(element) }));
    const headingCounts = headings.reduce((counts, heading) => {
      const key = heading.text.toLowerCase();
      if (key) counts[key] = (counts[key] ?? 0) + 1;
      return counts;
    }, {});

    const images = [...document.images].filter(visible).map((image) => ({
      src: image.currentSrc || image.src,
      alt: clean(image.alt),
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      complete: image.complete,
      ...box(image),
    }));

    const links = [...document.querySelectorAll('a[href]')].filter(visible).map((anchor) => ({
      text: clean(anchor.textContent),
      href: anchor.href,
      ...box(anchor),
    }));

    const blockSelector = 'main > section, main > article, main > div, article > section, article > div';
    const blocks = [...document.querySelectorAll(blockSelector)].filter(visible).map((element, index) => ({
      index,
      tag: element.tagName.toLowerCase(),
      id: element.id,
      className: clean(element.className).slice(0, 180),
      heading: clean(element.querySelector('h1, h2, h3')?.textContent),
      excerpt: clean(element.textContent).slice(0, 320),
      ...box(element),
    }));

    const blockFingerprints = blocks.reduce((counts, block) => {
      const fingerprint = `${block.heading}|${block.excerpt}`.toLowerCase();
      if (fingerprint.length > 80) counts[fingerprint] = (counts[fingerprint] ?? 0) + 1;
      return counts;
    }, {});

    const overflow = [...document.querySelectorAll('body *')]
      .filter(visible)
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.left < -1 || rect.right > window.innerWidth + 1;
      })
      .slice(0, 25)
      .map((element) => ({
        tag: element.tagName.toLowerCase(),
        className: clean(element.className).slice(0, 160),
        text: clean(element.textContent).slice(0, 120),
        ...box(element),
      }));

    const main = document.querySelector('main') ?? document.body;
    const mainText = clean(main.innerText);
    return {
      title: document.title,
      documentWidth: document.documentElement.scrollWidth,
      documentHeight: document.documentElement.scrollHeight,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      h1Count: headings.filter((heading) => heading.level === 'h1').length,
      headings,
      duplicateHeadings: Object.entries(headingCounts).filter(([, count]) => count > 1).map(([text, count]) => ({ text, count })),
      blocks,
      duplicateBlocks: Object.entries(blockFingerprints).filter(([, count]) => count > 1).map(([fingerprint, count]) => ({ fingerprint: fingerprint.slice(0, 220), count })),
      images,
      missingImages: images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
      links,
      overflow,
      mainText,
      mainTextLength: mainText.length,
    };
  });
}

async function capturePage(page, route, viewportName, state) {
  if (screenshotMode === 'none') return [];
  if (screenshotMode === 'priority' && !priorityRoutes.has(route)) return [];

  const directory = path.join(screenshotRoot, viewportName);
  await fs.mkdir(directory, { recursive: true });
  const slug = routeToSlug(route);
  const files = [];
  const fullPath = path.join(directory, `${slug}-full.png`);
  await page.screenshot({ path: fullPath, fullPage: true });
  files.push(path.relative(outputRoot, fullPath).replaceAll('\\', '/'));

  if (state.documentHeight > 28000) {
    const segmentDirectory = path.join(directory, `${slug}-segments`);
    await fs.mkdir(segmentDirectory, { recursive: true });
    const segmentHeight = 8000;
    const step = segmentHeight - 80;
    let segment = 0;
    for (let y = 0; y < state.documentHeight; y += step) {
      const segmentPath = path.join(segmentDirectory, `${String(segment).padStart(3, '0')}.png`);
      await page.screenshot({
        path: segmentPath,
        clip: {
          x: 0,
          y,
          width: state.viewportWidth,
          height: Math.min(segmentHeight, state.documentHeight - y),
        },
      });
      files.push(path.relative(outputRoot, segmentPath).replaceAll('\\', '/'));
      segment += 1;
    }
  }

  return files;
}

await fs.mkdir(outputRoot, { recursive: true });
await fs.rm(screenshotRoot, { recursive: true, force: true });

const browser = await chromium.launch({ headless: true });
const report = {
  generatedAt: new Date().toISOString(),
  label,
  baseUrl: baseUrl.href,
  routeSource,
  wordpressPostTypes,
  requestedViewports,
  routes: [],
};

try {
  const discoveredRoutes = routeSource === 'wordpress-sitemap'
    ? await routesFromWordPressSitemap()
    : await routesFromDist();
  const routes = requestedRoutes.size
    ? discoveredRoutes.filter((route) => requestedRoutes.has(route))
    : discoveredRoutes;
  process.stdout.write(`[${label}] discovered ${routes.length} routes\n`);

  for (const viewportName of requestedViewports) {
    const viewport = viewportCatalog[viewportName];
    if (!viewport) throw new Error(`Unknown viewport: ${viewportName}`);
    const context = await browser.newContext({
      viewport,
      extraHTTPHeaders: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    });
    const page = await context.newPage();

    for (const [index, route] of routes.entries()) {
      const consoleErrors = [];
      const failedRequests = [];
      const onConsole = (message) => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      };
      const onRequestFailed = (request) => failedRequests.push(`${request.resourceType()}: ${request.url()}`);
      page.on('console', onConsole);
      page.on('requestfailed', onRequestFailed);

      let response;
      let error;
      try {
        response = await page.goto(routeToUrl(route), { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForLoadState('networkidle', { timeout: 6000 }).catch(() => undefined);
      } catch (caught) {
        error = caught instanceof Error ? caught.message : String(caught);
        if (!page.url().startsWith('http')) {
          report.routes.push({ route, viewport: viewportName, status: 0, error, consoleErrors, failedRequests, screenshots: [] });
          page.off('console', onConsole);
          page.off('requestfailed', onRequestFailed);
          continue;
        }
      }

      await page.waitForTimeout(500);
      await scrollEntirePage(page);
      const state = await extractPageState(page);
      const screenshots = await capturePage(page, route, viewportName, state);
      report.routes.push({
        route,
        viewport: viewportName,
        url: page.url(),
        status: response?.status() ?? 0,
        error,
        ...state,
        screenshots,
        consoleErrors: [...new Set(consoleErrors)],
        failedRequests: [...new Set(failedRequests)],
      });
      page.off('console', onConsole);
      page.off('requestfailed', onRequestFailed);

      process.stdout.write(`[${label}] ${viewportName} ${index + 1}/${routes.length} ${route}\n`);
    }
    await context.close();
  }

  report.summary = {
    uniqueRoutes: new Set(report.routes.map((result) => result.route)).size,
    captures: report.routes.length,
    non200: report.routes.filter((result) => result.status !== 200).length,
    missingImages: report.routes.reduce((sum, result) => sum + (result.missingImages?.length ?? 0), 0),
    overflowPages: report.routes.filter((result) => result.overflow?.length).length,
    duplicatedPages: report.routes.filter((result) => result.duplicateBlocks?.length || result.duplicateHeadings?.length).length,
    consoleErrorPages: report.routes.filter((result) => result.consoleErrors?.length).length,
    failedRequestPages: report.routes.filter((result) => result.failedRequests?.length).length,
  };
  await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report.summary, null, 2));
} finally {
  await browser.close();
}
