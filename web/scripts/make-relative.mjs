#!/usr/bin/env node
/**
 * Transform the root-relative mirror into a subpath-portable copy (mirror-rel/):
 * every href/src/srcset/url(/...) becomes relative to the file's depth, so the
 * site works served from ANY base path (e.g. /staging/ on IONOS, GitHub Pages).
 * Usage: node scripts/make-relative.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SRC = path.join(ROOT, 'mirror');
const DST = path.join(ROOT, 'mirror-rel');

fs.rmSync(DST, { recursive: true, force: true });

function relativize(text, depth) {
  const up = depth === 0 ? './' : '../'.repeat(depth);
  return text
    // href/src/poster/data-src="/x" (not protocol-relative "//")
    .replace(/(\b(?:href|src|poster|data-src)=["'])\/(?!\/)/g, `$1${up}`)
    // srcset lists: leading "/" of each candidate
    .replace(/(\b(?:srcset|data-srcset)=["'])([^"']+)(["'])/g, (m, a, list, z) =>
      a + list.split(',').map((part) => part.trim().replace(/^\/(?!\/)/, up)).join(', ') + z)
    // css url(/x)
    .replace(/url\(\s*(['"]?)\/(?!\/)/g, (m, q) => `url(${q}${up}`);
}

let files = 0;
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const src = path.join(dir, e.name);
    const rel = path.relative(SRC, src);
    const dst = path.join(DST, rel);
    if (e.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); walk(src); continue; }
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    if (/\.(html|css)$/.test(e.name)) {
      const depth = rel.split(path.sep).length - 1;
      let text = relativize(fs.readFileSync(src, 'utf8'), depth);
      if (e.name.endsWith('.html')) {
        // staging safety: never let search engines index the copy
        text = text.replace('</head>', '<meta name="robots" content="noindex, nofollow" />\n</head>');
      }
      fs.writeFileSync(dst, text);
    } else {
      fs.copyFileSync(src, dst);
    }
    files++;
  }
})(SRC);
console.log(`DONE — ${files} files -> ${DST}`);
