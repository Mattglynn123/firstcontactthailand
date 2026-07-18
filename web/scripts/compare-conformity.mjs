import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..', '..');
const reportDir = path.join(repoRoot, 'docs', 'conformity');

const readJson = async (name) => JSON.parse(await readFile(path.join(reportDir, name), 'utf8'));
const normalizeRoute = (route) => {
  const clean = String(route || '/').split('?')[0].replace(/\/{2,}/g, '/');
  return clean === '/' ? '/' : `/${clean.replace(/^\/+|\/+$/g, '')}/`;
};
const compact = (value) => String(value || '').replace(/\s+/g, ' ').trim();
const headingSet = (capture) => new Set(
  (capture?.headings || [])
    .map((heading) => compact(typeof heading === 'string' ? heading : heading.text).toLowerCase())
    .filter(Boolean),
);
const difference = (left, right) => [...left].filter((value) => !right.has(value));
const count = (capture, key) => Array.isArray(capture?.[key]) ? capture[key].length : 0;
const liveContentIsKnownNoise = (capture) => {
  const text = compact(capture?.mainText).toLowerCase();
  const repeatedSales = (text.match(/connect with one of our sales agents/g) || []).length > 2;
  return repeatedSales
    || /lorem ipsum|john doe|hello world!|plan a project with us\?|architecture and design/.test(text);
};
const reportMap = (report) => {
  const preferred = report.routes.some((capture) => capture.viewport === 'desktop')
    ? report.routes.filter((capture) => capture.viewport === 'desktop')
    : report.routes;
  return new Map(preferred.map((capture) => [normalizeRoute(capture.route), capture]));
};

const liveReportName = process.env.LIVE_REPORT ?? 'wordpress-live.json';
const astroReportName = process.env.ASTRO_REPORT ?? 'staging-current.json';
const matrixName = process.env.MATRIX_NAME ?? 'matrix';

const [liveReport, stagingReport, historyReport] = await Promise.all([
  readJson(liveReportName),
  readJson(astroReportName),
  readJson('history-priority.json'),
]);

const liveByRoute = reportMap(liveReport);
const stagingByRoute = reportMap(stagingReport);
const historyByRoute = new Map();

for (const capture of historyReport) {
  const route = normalizeRoute(capture.route);
  const entries = historyByRoute.get(route) || [];
  entries.push(capture);
  historyByRoute.set(route, entries);
}

const manualPriority = {
  '/': {
    priority: 'high',
    decision: 'Keep the richer Astro homepage and verify it visually against the stable parts of the live page.',
  },
  '/property/': {
    priority: 'critical',
    decision: 'Resolved in Astro: the legacy URL now uses the complete five-path property hub.',
  },
  '/real-estate/': {
    priority: 'high',
    decision: 'Keep the complete five-path property hub and align the legacy /property/ URL with it.',
  },
  '/community-events/': {
    priority: 'critical',
    decision: 'Resolved in Astro: keep the clean events hub and the 22 published event detail routes.',
  },
  '/local-business-network/': {
    priority: 'critical',
    decision: 'Keep the clean 16-card Astro implementation; the current WordPress render is broken.',
  },
  '/hire/': {
    priority: 'high',
    decision: 'Keep Astro; it removes the three broken images present in WordPress.',
  },
  '/local-deals/': {
    priority: 'high',
    decision: 'Keep Astro and validate all deal destinations and CTA labels.',
  },
  '/tours-2/': {
    priority: 'high',
    decision: 'Keep Astro and validate the three tour pathways and responsive CTA layout.',
  },
  '/contact-2/': {
    priority: 'medium',
    decision: 'Resolved in Astro: the legacy URL now reuses the canonical Contact page component.',
  },
};

const routes = [...new Set([...liveByRoute.keys(), ...stagingByRoute.keys()])].sort((a, b) => a.localeCompare(b));
const matrix = routes.map((route) => {
  const live = liveByRoute.get(route);
  const staging = stagingByRoute.get(route);
  const liveHeadings = headingSet(live);
  const stagingHeadings = headingSet(staging);
  const liveLength = live?.mainTextLength || 0;
  const stagingLength = staging?.mainTextLength || 0;
  const ratio = liveLength ? Number((stagingLength / liveLength).toFixed(2)) : null;
  const issues = [];

  if (!live) issues.push('Astro-only route');
  if (!staging) issues.push('Missing from Astro');
  if (staging && staging.status !== 200) issues.push(`Astro HTTP ${staging.status}`);
  if (count(staging, 'missingImages')) issues.push(`${count(staging, 'missingImages')} missing Astro image(s)`);
  if (count(staging, 'overflow')) issues.push('Astro horizontal overflow');
  if (count(staging, 'duplicateHeadings') || count(staging, 'duplicateBlocks')) issues.push('Duplicated Astro content');
  if (count(staging, 'consoleErrors') || count(staging, 'failedRequests')) issues.push('Astro runtime/network errors');
  if (liveLength >= 300 && ratio !== null && ratio < 0.55 && !liveContentIsKnownNoise(live)) {
    issues.push('Astro content materially shorter than WordPress');
  }
  if (live && live.documentHeight >= 10000) issues.push('WordPress render is structurally broken');
  if (count(live, 'missingImages')) issues.push(`${count(live, 'missingImages')} missing WordPress image(s)`);
  if (count(live, 'consoleErrors') || count(live, 'failedRequests')) issues.push('WordPress runtime/network errors');

  const manual = manualPriority[route];
  let priority = manual?.priority || 'low';
  if (!staging || staging?.status !== 200 || count(staging, 'missingImages') || count(staging, 'overflow')) priority = 'critical';
  else if (issues.some((issue) => issue.startsWith('Astro content materially'))) priority = priority === 'low' ? 'high' : priority;
  else if (count(staging, 'duplicateHeadings') || count(staging, 'duplicateBlocks')) priority = priority === 'low' ? 'medium' : priority;

  const astroDefects = !staging
    || staging.status !== 200
    || count(staging, 'missingImages')
    || count(staging, 'overflow')
    || count(staging, 'duplicateHeadings')
    || count(staging, 'duplicateBlocks')
    || count(staging, 'consoleErrors')
    || count(staging, 'failedRequests');
  const contentReview = issues.some((issue) => issue.startsWith('Astro content materially'));
  const state = astroDefects ? 'open' : contentReview ? 'review' : manual ? 'resolved' : 'clean';
  if (state === 'resolved') priority = 'low';

  return {
    route,
    priority,
    state,
    live: live ? {
      status: live.status,
      height: live.documentHeight,
      textLength: liveLength,
      images: count(live, 'images'),
      missingImages: count(live, 'missingImages'),
      overflowItems: count(live, 'overflow'),
      duplicateSignals: count(live, 'duplicateHeadings') + count(live, 'duplicateBlocks'),
      consoleErrors: count(live, 'consoleErrors'),
      failedRequests: count(live, 'failedRequests'),
    } : null,
    staging: staging ? {
      status: staging.status,
      height: staging.documentHeight,
      textLength: stagingLength,
      images: count(staging, 'images'),
      missingImages: count(staging, 'missingImages'),
      overflowItems: count(staging, 'overflow'),
      duplicateSignals: count(staging, 'duplicateHeadings') + count(staging, 'duplicateBlocks'),
      consoleErrors: count(staging, 'consoleErrors'),
      failedRequests: count(staging, 'failedRequests'),
    } : null,
    contentRatio: ratio,
    headingsOnlyInWordPress: difference(liveHeadings, stagingHeadings),
    headingsOnlyInAstro: difference(stagingHeadings, liveHeadings),
    recoveredHistorySources: [...new Set((historyByRoute.get(route) || []).map((entry) => entry.source))],
    issues,
    decision: manual?.decision || '',
  };
});

const rank = { critical: 0, high: 1, medium: 2, low: 3 };
const sorted = [...matrix].sort((a, b) => rank[a.priority] - rank[b.priority] || a.route.localeCompare(b.route));
const summary = {
  generatedAt: new Date().toISOString(),
  liveReport: liveReportName,
  astroReport: astroReportName,
  liveRoutes: liveByRoute.size,
  stagingRoutes: stagingByRoute.size,
  commonRoutes: routes.filter((route) => liveByRoute.has(route) && stagingByRoute.has(route)).length,
  missingFromStaging: routes.filter((route) => liveByRoute.has(route) && !stagingByRoute.has(route)),
  stagingOnly: routes.filter((route) => !liveByRoute.has(route) && stagingByRoute.has(route)),
  priorities: Object.fromEntries(['critical', 'high', 'medium', 'low'].map((priority) => [
    priority,
    sorted.filter((row) => row.priority === priority).length,
  ])),
  states: Object.fromEntries(['open', 'review', 'resolved', 'clean'].map((state) => [
    state,
    sorted.filter((row) => row.state === state).length,
  ])),
};

const launchBlockers = sorted.filter((row) => row.state === 'open');
const contentReviews = sorted.filter((row) => row.state === 'review');

const esc = (value) => compact(value).replace(/\|/g, '\\|');
const markdown = [
  '# First Contact Thailand - Conformity Matrix',
  '',
  `Generated: ${summary.generatedAt}`,
  '',
  `- WordPress page routes: ${summary.liveRoutes}`,
  `- Astro routes: ${summary.stagingRoutes}`,
  `- Shared routes: ${summary.commonRoutes}`,
  `- Missing from Astro: ${summary.missingFromStaging.length}`,
  `- Astro-only routes: ${summary.stagingOnly.length}`,
  `- Priority counts: ${Object.entries(summary.priorities).map(([key, value]) => `${key} ${value}`).join(', ')}`,
  `- States: ${Object.entries(summary.states).map(([key, value]) => `${key} ${value}`).join(', ')}`,
  '',
  '> WordPress is a comparison source, not the implementation source. Broken live renders, injected CSS/JS, display locks and duplicated blocks must not be copied into Astro.',
  '',
  '| State | Priority | Route | Live / Astro text | Live / Astro images | Findings | Decision |',
  '| --- | --- | --- | ---: | ---: | --- | --- |',
  ...sorted.map((row) => {
    const text = `${row.live?.textLength ?? '-'} / ${row.staging?.textLength ?? '-'}`;
    const images = `${row.live?.images ?? '-'} / ${row.staging?.images ?? '-'}`;
    return `| ${row.state} | ${row.priority} | ${row.route} | ${text} | ${images} | ${esc(row.issues.join('; ') || 'No automated defect')} | ${esc(row.decision)} |`;
  }),
  '',
  '## Launch Blockers',
  '',
  ...(launchBlockers.length
    ? launchBlockers.map((row) => `- ${row.route}: ${row.issues.join('; ') || 'open automated defect'}`)
    : ['- No automated Astro launch blocker remains in this comparison.']),
  '',
  '## Content Reviews',
  '',
  ...(contentReviews.length
    ? contentReviews.map((row) => `- ${row.route}: review the useful live content before accepting the shorter Astro version.`)
    : ['- No material content-length review remains.']),
  '',
].join('\n');

await Promise.all([
  writeFile(path.join(reportDir, `${matrixName}.json`), `${JSON.stringify({ summary, routes: sorted }, null, 2)}\n`),
  writeFile(path.join(reportDir, `${matrixName}.md`), markdown),
]);

console.log(JSON.stringify(summary, null, 2));
