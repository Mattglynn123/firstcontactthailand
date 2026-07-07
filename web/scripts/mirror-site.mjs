#!/usr/bin/env node
/**
 * Static mirror of firstcontactthailand.com — faithful, WordPress-free copy.
 * Crawls every published page (from the WP REST inventory), downloads all
 * same-domain assets (css/js/images/fonts), rewrites URLs to root-relative,
 * and writes a deployable static site into ../../mirror/.
 *
 * Read-only against the live site. Idempotent. Usage:
 *   node scripts/mirror-site.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://firstcontactthailand.com';
const HOST = new URL(SITE).host;
const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'mirror');

const seenAssets = new Map(); // url -> local path
const queue = [];
let downloaded = 0, failed = 0;

async function wpJson(url) {
  const res = await fetch(url);
  const raw = (await res.text()).replace(/^[^[{]+/, '');
  return JSON.parse(raw);
}

async function fetchAllSlugs(type) {
  const slugs = [];
  for (let page = 1; ; page++) {
    let data;
    try {
      data = await wpJson(`${SITE}/wp-json/wp/v2/${type}?per_page=100&page=${page}&status=publish&_fields=slug`);
    } catch { break; }
    if (!Array.isArray(data) || data.length === 0) break;
    slugs.push(...data.map((p) => p.slug));
    if (data.length < 100) break;
  }
  return slugs;
}

/** Map a same-site URL to a local file path under OUT. */
function localPathFor(u) {
  const url = new URL(u, SITE);
  let p = decodeURIComponent(url.pathname).replace(/\/{2,}/g, '/');
  if (p.endsWith('/')) p += 'index.html';
  if (!path.posix.extname(p)) p += '/index.html';
  // keep a stable name for querystring variants (e.g. ?ver=6.8.3)
  if (url.search && !p.endsWith('.html')) {
    const ext = path.posix.extname(p);
    const hash = Buffer.from(url.search).toString('base64url').slice(0, 8);
    p = p.slice(0, -ext.length) + `.${hash}` + ext;
  }
  return p.replace(/^\//, '');
}

function isSameSite(u) {
  try { return new URL(u, SITE).host === HOST; } catch { return false; }
}

/** Rewrite same-site absolute/relative URLs inside HTML/CSS to root-relative local paths. */
function rewrite(text) {
  return text.replace(
    /https?:\\?\/\\?\/(?:www\.)?firstcontactthailand\.com(\\?\/[^"'\s)\\<>]*)?/g,
    (m, rest = '') => {
      const clean = (rest || '/').replace(/\\\//g, '/');
      try {
        const u = new URL(clean, SITE);
        if (/\.(css|js|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|eot|mp4|webm|pdf)(\?|$)/i.test(u.pathname + u.search)) {
          enqueueAsset(u.href);
          return '/' + localPathFor(u.href);
        }
        return u.pathname === '/' ? '/' : u.pathname.replace(/\/$/, '') + '/';
      } catch { return m; }
    },
  );
}

function enqueueAsset(u) {
  const key = u.split('#')[0];
  if (seenAssets.has(key) || !isSameSite(key)) return;
  seenAssets.set(key, localPathFor(key));
  queue.push(key);
}

async function saveFile(rel, data) {
  const file = path.join(OUT, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
}

async function downloadAsset(u) {
  try {
    const res = await fetch(u, { redirect: 'follow' });
    if (!res.ok) throw new Error(res.status);
    const rel = seenAssets.get(u);
    const type = res.headers.get('content-type') ?? '';
    if (/css/.test(type) || rel.endsWith('.css')) {
      let css = await res.text();
      // pull url(...) deps (fonts, images) before rewriting
      for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
        const dep = m[1];
        if (dep.startsWith('data:')) continue;
        const abs = new URL(dep, u).href;
        if (isSameSite(abs)) enqueueAsset(abs);
      }
      css = rewrite(css);
      // make remaining relative url() deps resolvable: leave as-is (same folder structure preserved)
      await saveFile(rel, css);
    } else {
      await saveFile(rel, Buffer.from(await res.arrayBuffer()));
    }
    downloaded++;
  } catch (e) {
    failed++;
    console.error(`ASSET FAIL ${u}: ${e.message}`);
  }
}

async function mirrorPage(urlPath) {
  const u = `${SITE}${urlPath}`;
  const res = await fetch(u, { redirect: 'follow' });
  if (!res.ok) { console.error(`PAGE FAIL ${urlPath}: ${res.status}`); return; }
  let html = await res.text();
  // collect srcset URLs (rewrite() also catches them, but enqueue explicitly)
  for (const m of html.matchAll(/(?:src|href)=["'](https?:\/\/(?:www\.)?firstcontactthailand\.com[^"']+)["']/g)) {
    const abs = m[1];
    if (/\.(css|js|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf)(\?|$)/i.test(abs)) enqueueAsset(abs);
  }
  // ROOT-RELATIVE refs (src/href/data-src/poster) — pages authored with "/wp-content/..." paths
  for (const m of html.matchAll(/(?:src|href|data-src|poster)=["'](\/(?:wp-content|wp-includes)\/[^"']+)["']/g)) {
    enqueueAsset(new URL(m[1], SITE).href);
  }
  // srcset / data-srcset entries (comma-separated "url width" pairs)
  for (const m of html.matchAll(/(?:srcset|data-srcset)=["']([^"']+)["']/g)) {
    for (const part of m[1].split(',')) {
      const cand = part.trim().split(/\s+/)[0];
      if (cand.startsWith('/wp-') ) enqueueAsset(new URL(cand, SITE).href);
      else if (isSameSite(cand) && /^https?:/.test(cand)) enqueueAsset(cand);
    }
  }
  // inline style backgrounds: url(/wp-content/...)
  for (const m of html.matchAll(/url\(\s*['"]?(\/(?:wp-content|wp-includes)\/[^'")]+)['"]?\s*\)/g)) {
    enqueueAsset(new URL(m[1], SITE).href);
  }
  html = rewrite(html);
  // drop the WP emoji polyfill inline script — obsolete (native emoji support) and
  // its escaped-JSON URLs don't survive static rewriting (double-slash 404s + JS syntax error)
  html = html.replace(/<script[^>]*>[^<]*_wpemojiSettings[\s\S]*?<\/script>/g, '');
  html = html.replace(/<script[^>]*src="[^"]*wp-emoji-release[^"]*"[^>]*><\/script>/g, '');
  const rel = urlPath === '/' ? 'index.html' : `${urlPath.replace(/^\/|\/$/g, '')}/index.html`;
  await saveFile(rel, html);
  console.log(`page ${urlPath}`);
}

// ---- run ----
enqueueAsset(`${SITE}/favicon.ico`);
const pageSlugs = await fetchAllSlugs('pages');
const postSlugs = await fetchAllSlugs('posts');
const paths = ['/', ...pageSlugs.map((s) => `/${s}/`), ...postSlugs.map((s) => `/${s}/`)];
console.log(`${paths.length} pages to mirror`);

for (const p of paths) await mirrorPage(p);

console.log(`${queue.length} assets queued`);
const CONCURRENCY = 8;
while (queue.length) {
  await Promise.all(queue.splice(0, CONCURRENCY).map(downloadAsset));
}
console.log(`DONE — assets ok: ${downloaded}, failed: ${failed}, out: ${OUT}`);
