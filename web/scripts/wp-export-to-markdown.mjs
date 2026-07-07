#!/usr/bin/env node
/**
 * WP → Markdown migration for firstcontactthailand.com
 * Fetches all pages/posts via the WP REST API, converts HTML to Markdown,
 * and writes frontmattered .md files into web/src/content/.
 *
 * Read-only against the live site. Idempotent: re-run to refresh.
 * Usage: node scripts/wp-export-to-markdown.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';

const SITE = 'https://firstcontactthailand.com';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = {
  pages: path.join(ROOT, 'src', 'content', 'pages'),
  posts: path.join(ROOT, 'src', 'content', 'posts'),
};

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
// keep iframes (maps, videos) as-is so nothing is silently lost
td.keep(['iframe']);

/** WP responses are prefixed with BOM/zero-width junk by a plugin — strip to first JSON char. */
async function wpJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const raw = (await res.text()).replace(/^[^[{]+/, '');
  return { data: JSON.parse(raw), totalPages: Number(res.headers.get('x-wp-totalpages') ?? 1) };
}

async function fetchAll(type) {
  const all = [];
  let page = 1, totalPages = 1;
  do {
    const url = `${SITE}/wp-json/wp/v2/${type}?per_page=100&page=${page}&status=publish` +
      `&_fields=id,slug,title,content,excerpt,date,modified,parent,menu_order,link`;
    const { data, totalPages: tp } = await wpJson(url);
    totalPages = tp;
    all.push(...data);
    page++;
  } while (page <= totalPages);
  return all;
}

const yamlEscape = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

function toMarkdown(item, type) {
  const title = item.title?.rendered?.trim() || item.slug;
  const html = item.content?.rendered ?? '';
  const body = td.turndown(html).trim();
  const fm = [
    '---',
    `title: ${yamlEscape(title)}`,
    `slug: ${yamlEscape(item.slug)}`,
    `wpId: ${item.id}`,
    `date: ${item.date}`,
    `modified: ${item.modified}`,
    `originalUrl: ${yamlEscape(item.link)}`,
    `wpParent: ${item.parent ?? 0}`,
    `menuOrder: ${item.menu_order ?? 0}`,
    `sourceType: ${type}`,
    'draft: false',
    '---',
  ].join('\n');
  return `${fm}\n\n${body}\n`;
}

for (const [type, dir] of Object.entries(OUT)) {
  await mkdir(dir, { recursive: true });
  const items = await fetchAll(type);
  let ok = 0, empty = 0;
  for (const item of items) {
    const md = toMarkdown(item, type);
    if (!item.content?.rendered?.trim()) empty++;
    await writeFile(path.join(dir, `${item.slug}.md`), md, 'utf8');
    ok++;
  }
  console.log(`${type}: ${ok} written (${empty} with empty body) -> ${dir}`);
}
console.log('DONE');
