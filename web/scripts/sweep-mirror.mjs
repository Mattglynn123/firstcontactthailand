#!/usr/bin/env node
/**
 * QA sweep of the static mirror: loads every mirrored page in headless Chromium
 * and records irregularities — failed resources (>=400), JS page errors,
 * console errors, missing title. Usage (mirror served on :8123):
 *   node scripts/sweep-mirror.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MIRROR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'mirror');
const BASE = 'http://localhost:8123';

// discover all page paths (dirs containing index.html)
const paths = ['/'];
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    const r = `${rel}${e.name}/`;
    if (fs.existsSync(path.join(dir, e.name, 'index.html')) && !r.startsWith('/wp-')) paths.push(r);
    walk(path.join(dir, e.name), r);
  }
})(MIRROR, '/');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
const report = [];

for (const p of paths) {
  const issues = { path: p, failed: [], errors: [], title: '' };
  const onResp = (res) => {
    if (res.status() >= 400) issues.failed.push(`${res.status()} ${res.url().replace(BASE, '')}`);
  };
  const onErr = (err) => issues.errors.push(String(err.message).slice(0, 120));
  const onConsole = (msg) => { if (msg.type() === 'error') issues.errors.push(msg.text().slice(0, 120)); };
  page.on('response', onResp); page.on('pageerror', onErr); page.on('console', onConsole);
  try {
    await page.goto(BASE + p, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(400);
    issues.title = await page.title();
  } catch (e) {
    issues.errors.push('NAV FAIL: ' + e.message.slice(0, 100));
  }
  page.off('response', onResp); page.off('pageerror', onErr); page.off('console', onConsole);
  report.push(issues);
  const bad = issues.failed.length + issues.errors.length;
  if (bad) console.log(`${p} — ${issues.failed.length} failed, ${issues.errors.length} errors`);
}

await browser.close();
fs.writeFileSync(path.join(MIRROR, '..', 'sweep-report.json'), JSON.stringify(report, null, 2));

const clean = report.filter((r) => !r.failed.length && !r.errors.length).length;
console.log(`\nSWEEP DONE: ${report.length} pages, ${clean} clean, ${report.length - clean} with issues`);
const failCounts = {};
for (const r of report) for (const f of r.failed) failCounts[f] = (failCounts[f] ?? 0) + 1;
const top = Object.entries(failCounts).sort((a, b) => b[1] - a[1]).slice(0, 15);
if (top.length) { console.log('\nTop failing resources:'); for (const [u, n] of top) console.log(`  ${n}x ${u}`); }
