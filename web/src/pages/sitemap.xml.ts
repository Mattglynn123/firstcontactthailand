import { getCollection } from 'astro:content';
import { charityPrograms, completedCharityPages } from '../data/charities';
import { communityEvents } from '../data/events';
import { pastEvents } from '../data/past-events';
import { propertyAreas } from '../data/property-areas';
import { regionalEvents } from '../data/regional-events';

const site = 'https://firstcontactthailand.com';
const staticPageModules = import.meta.glob('./**/*.astro');

const normalize = (path: string) => {
  const route = path
    .replace(/^\.\//, '/')
    .replace(/index\.astro$/, '')
    .replace(/\.astro$/, '/')
    .replace(/\/+/g, '/');

  return route === '/' ? '/' : route.replace(/\/$/, '/');
};

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const contentPages = await getCollection('pages', ({ data }) => !data.draft);
  const urls = new Set<string>();

  for (const path of Object.keys(staticPageModules)) {
    if (path.includes('[') || path.includes('404.astro')) continue;
    urls.add(normalize(path));
  }

  for (const page of contentPages) urls.add(`/${page.data.slug}/`);
  for (const event of communityEvents) urls.add(`/event/${event.slug}/`);
  for (const page of Object.values(pastEvents)) urls.add(`/past-events/${page.slug}/`);
  for (const area of propertyAreas) urls.add(`/property-sales/${area.slug}/`);
  for (const slug of Object.keys(regionalEvents)) urls.add(`/${slug}/`);
  for (const program of charityPrograms) urls.add(`/${program.slug}/`);
  for (const page of completedCharityPages) urls.add(`/${page.slug}/`);

  const lastmod = new Date().toISOString();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...urls].sort().map((path) => {
      const loc = new URL(path, site).toString();
      return `  <url><loc>${xmlEscape(loc)}</loc><lastmod>${lastmod}</lastmod></url>`;
    }),
    '</urlset>',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
