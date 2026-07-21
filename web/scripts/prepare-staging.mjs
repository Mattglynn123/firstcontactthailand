import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDir, '..');
const sourceRoot = path.join(webRoot, 'dist');
const stagingRoot = path.join(webRoot, 'dist-staging');
const stagingPrefix = '/staging';

async function listFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
  }));
  return nested.flat();
}

function prefixRootPaths(content) {
  return content
    .replaceAll('href="/', `href="${stagingPrefix}/`)
    .replaceAll("href='/", `href='${stagingPrefix}/`)
    .replaceAll('src="/', `src="${stagingPrefix}/`)
    .replaceAll("src='/", `src='${stagingPrefix}/`)
    .replaceAll('data-listings-path="/', `data-listings-path="${stagingPrefix}/`)
    .replaceAll("data-listings-path='/", `data-listings-path='${stagingPrefix}/`)
    .replaceAll("url('/", `url('${stagingPrefix}/`)
    .replaceAll('url("/', `url("${stagingPrefix}/`)
    .replace(/url\(\/(?!\/)/g, `url(${stagingPrefix}/`);
}

await fs.rm(stagingRoot, { recursive: true, force: true });
await fs.cp(sourceRoot, stagingRoot, { recursive: true });

for (const filePath of await listFiles(stagingRoot)) {
  const extension = path.extname(filePath).toLowerCase();
  if (!['.html', '.css', '.js'].includes(extension)) continue;

  let content = await fs.readFile(filePath, 'utf8');
  content = prefixRootPaths(content);
  if (extension === '.html' && !content.includes('name="robots"')) {
    content = content.replace('<meta name="viewport"', '<meta name="robots" content="noindex,nofollow"><meta name="viewport"');
  }
  await fs.writeFile(filePath, content);
}

await fs.writeFile(path.join(stagingRoot, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
await fs.writeFile(path.join(stagingRoot, '.htaccess'), [
  'Options -Indexes',
  '<IfModule mod_headers.c>',
  '  Header set X-Robots-Tag "noindex, nofollow"',
  '  Header set X-Content-Type-Options "nosniff"',
  '  Header set Referrer-Policy "strict-origin-when-cross-origin"',
  '</IfModule>',
  '',
].join('\n'));

console.log(`Prepared staging package at ${stagingRoot}`);
