#!/usr/bin/env node
/**
 * Repair pass: find mirrored asset files whose bytes are actually an HTML page
 * (WP served a soft-404/login page during crawl), re-fetch each from the live
 * site, and replace when the live copy is a real asset. Assets that are HTML
 * on the live site too are left as-is (the live site is broken there — fidelity).
 * Fixes both mirror/ and mirror-rel/. Usage: node scripts/fix-fake-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE = 'https://firstcontactthailand.com';
const ASSET_EXT = /\.(png|jpe?g|gif|webp|avif|ico|woff2?|ttf|eot|js|css|svg)$/i;

function looksHtml(buf) {
  const head = buf.subarray(0, 200).toString('utf8').replace(/[﻿​�]/g, '').trimStart();
  return head.startsWith('<!D') || head.startsWith('<!d') || head.startsWith('<html');
}

const fakes = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) { walk(f); continue; }
    if (!ASSET_EXT.test(e.name) || e.name.endsWith('.css') ) {
      if (!ASSET_EXT.test(e.name)) continue;
    }
    const buf = fs.readFileSync(f);
    if (looksHtml(buf)) fakes.push(f);
  }
})(path.join(ROOT, 'mirror'));

console.log('fake assets found in mirror/:', fakes.length);
let fixed = 0, liveBroken = 0;
for (const f of fakes) {
  const rel = path.relative(path.join(ROOT, 'mirror'), f).split(path.sep).join('/');
  // strip the querystring-hash suffix we add: name.<8-char-b64>.ext -> try plain name.ext first
  const plain = rel.replace(/\.[A-Za-z0-9_-]{8}(\.[a-z0-9]+)$/i, '$1');
  let ok = false;
  for (const candidate of [plain, rel]) {
    const url = `${SITE}/${candidate}`;
    try {
      const res = await fetch(url, { redirect: 'follow' });
      const type = res.headers.get('content-type') ?? '';
      if (res.ok && !/text\/html/.test(type)) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (!looksHtml(buf)) {
          fs.writeFileSync(f, buf);
          const relFile = path.join(ROOT, 'mirror-rel', path.relative(path.join(ROOT, 'mirror'), f));
          if (fs.existsSync(path.dirname(relFile))) fs.writeFileSync(relFile, buf);
          console.log('FIXED', rel, `(${buf.length} bytes, ${type})`);
          fixed++; ok = true;
          break;
        }
      }
    } catch { /* try next */ }
  }
  if (!ok) { liveBroken++; console.log('LIVE-BROKEN (left as-is)', rel); }
}
console.log(`DONE — fixed: ${fixed}, broken-on-live: ${liveBroken}`);
