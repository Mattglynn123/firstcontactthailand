import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(scriptDir, '../public/data/property-listings');
const propertyAssetDir = path.resolve(scriptDir, '../public/assets/fct/properties');
const remaxEndpoint = 'https://www.remax.co.th/search/listing-search/docs/search';
const remaxBaseFilter = "content/TenantId eq 6 and content/MacroRegionId eq 92 and content/OnHoldListing eq false and content/IsRegionalOffice eq false and content/IsViewable eq true and content/TransactionTypeUID eq 261 and content/ListingStatusUID ne 167 and content/ListingStatusUID ne 169";

const remaxAreas = {
  'koh-phangan': "content/Province eq 'Surat Thani' and content/City eq 'Koh Pha Ngan'",
  bangkok: "content/Province eq 'Bangkok'",
  pattaya: "content/Province eq 'Chonburi-Pattaya'",
  phuket: "content/Province eq 'Phuket'",
  'chiang-mai': "content/Province eq 'Chiang Mai'",
  'hua-hin': "content/City eq 'Hua Hin'",
};

const areaNames = {
  'koh-samui': 'Koh Samui',
  'koh-phangan': 'Koh Phangan',
  bangkok: 'Bangkok',
  pattaya: 'Pattaya',
  phuket: 'Phuket',
  krabi: 'Krabi',
  'chiang-mai': 'Chiang Mai',
  'hua-hin': 'Hua Hin',
};

function clean(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\bRE\s*\/?\s*MAX\b/gi, '')
    .replace(/\bREMAX[A-Za-z0-9_#-]*\b/gi, '')
    .replace(/@remax[A-Za-z0-9_.-]*/gi, '')
    .replace(/\bTop Properties\b/gi, '')
    .replace(/\bParadise Properties(?: Krabi)?\b/gi, '')
    .replace(/\bKate Property Krabi\b/gi, '')
    .replace(/\bLazudi\b/gi, '')
    .replace(/\bLAZ\d+\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function englishItem(items, field) {
  if (!Array.isArray(items)) return '';
  const preferred = items.find((item) => item?.ISOLanguageCode === 'en' && item?.[field]);
  return clean(preferred?.[field] ?? items.find((item) => item?.[field])?.[field] ?? '');
}

function remaxTitle(property, areaName) {
  const metaTitle = englishItem(property.ListingMetaTags, 'MetaTitle').replace(/\|.*/, '').replace(/\{seo:[^}]+\}/g, '').trim();
  if (metaTitle) return metaTitle;
  const location = [property.LocalZone, property.City, property.Province].filter(Boolean).slice(0, 2).join(', ');
  return location || `${areaName} Property For Sale`;
}

function remaxImages(property) {
  const regionId = Number(property.MacroRegionId) || 92;
  return [...(property.ListingImages ?? [])]
    .sort((a, b) => Number(a.Order ?? 0) - Number(b.Order ?? 0))
    .filter((image) => image?.FileName)
    .slice(0, 12)
    .map((image) => `https://cdn.gryphtech.com/userimages/${regionId}/Large/${encodeURIComponent(image.FileName)}`);
}

function mapRemax(row, areaSlug) {
  const property = row?.content ?? row;
  const areaName = areaNames[areaSlug];
  const description = englishItem(property.ListingDescriptions, 'Description') || `Current property listing for sale in ${areaName}.`;
  const location = [property.LocalZone, property.City, property.Province].filter(Boolean).slice(0, 2).join(', ') || areaName;
  const price = property.HidePricePublic ? 0 : Number(property.ListingPrice) || 0;
  return {
    id: String(
      property.ListingKey
      ?? property.ListingId
      ?? property.ListingReference
      ?? `${areaSlug}-${location}-${remaxTitle(property, areaName)}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    ),
    title: remaxTitle(property, areaName),
    description: description.slice(0, 3000),
    price,
    currency: property.ListingCurrency || 'THB',
    location,
    bedrooms: Number(property.NumberOfBedrooms) || 0,
    bathrooms: Number(property.NumberOfBathrooms) || 0,
    images: remaxImages(property),
    featured: false,
    newListing: false,
    updatedAt: property.FirstUpdatedToWeb || property.LastUpdatedOnWeb || '',
  };
}

async function fetchRemax(areaSlug, filter) {
  const rows = [];
  let skip = 0;
  let total = Infinity;
  while (skip < total) {
    const response = await fetch(remaxEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        count: true,
        skip,
        top: 500,
        searchMode: 'any',
        queryType: 'simple',
        search: '*',
        filter: `${remaxBaseFilter} and ${filter}`,
        orderby: 'content/FirstUpdatedToWeb desc',
      }),
    });
    if (!response.ok) throw new Error(`RE/MAX ${areaSlug}: HTTP ${response.status}`);
    const data = await response.json();
    total = Number(data['@odata.count']) || data.value?.length || 0;
    rows.push(...(data.value ?? []));
    skip += 500;
    if (!data.value?.length) break;
  }
  return rows.map((row) => mapRemax(row, areaSlug));
}

async function fetchSamui() {
  const key = process.env.PROPERTY_SUPABASE_KEY
    || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmaHp1ZWV6eXBicGZldmFncGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NzUxMTgsImV4cCI6MjA3MDA1MTExOH0.zU46jdoobbbT7tN-SIICAXviOcipMNN2qzyP7oiDBvk';
  const endpoint = 'https://pfhzueezypbpfevagpbg.supabase.co/rest/v1/properties?select=id,title,description,price,type,bedrooms,bathrooms,city,country,area,active,sold,price_on_application,property_ref,url_slug,new_property,reduced,featured,created_at,updated_at,property_images(image_url,display_order)&active=eq.true&order=created_at.desc&limit=1000';
  const response = await fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
  if (!response.ok) throw new Error(`Koh Samui property feed: HTTP ${response.status}`);
  const rows = await response.json();
  const twoWeeks = 14 * 24 * 60 * 60 * 1000;
  return rows.map((property) => {
    const updatedAt = property.created_at || property.updated_at || '';
    const timestamp = Date.parse(updatedAt);
    return {
      id: String(property.id ?? property.property_ref ?? property.title),
      title: clean(property.title) || 'Koh Samui Property For Sale',
      description: clean(property.description).slice(0, 3000) || 'Current property listing for sale in Koh Samui.',
      price: property.price_on_application ? 0 : Number(property.price) || 0,
      currency: 'THB',
      location: clean(property.area || property.city || 'Koh Samui'),
      bedrooms: Number(property.bedrooms) || 0,
      bathrooms: Number(property.bathrooms) || 0,
      images: [...(property.property_images ?? [])]
        .sort((a, b) => Number(a.display_order ?? 0) - Number(b.display_order ?? 0))
        .map((image) => image.image_url)
        .filter(Boolean)
        .slice(0, 12),
      featured: Boolean(property.featured),
      newListing: Number.isFinite(timestamp) && Date.now() - timestamp <= twoWeeks,
      updatedAt,
    };
  });
}

async function pathExists(candidate) {
  try {
    await fs.access(candidate);
    return true;
  } catch {
    return false;
  }
}

async function chromiumExecutablePath() {
  const candidates = [
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (await pathExists(candidate)) return candidate;
  }
  return undefined;
}

function parseThaiBaht(value) {
  const match = String(value ?? '').match(/฿\s*([\d,.]+)\s*(M)?/i);
  if (!match) return 0;
  const amount = Number(match[1].replace(/,/g, ''));
  if (!Number.isFinite(amount)) return 0;
  return Math.round(match[2] ? amount * 1000000 : amount);
}

function cleanLazudiImage(src) {
  try {
    const url = new URL(src);
    if (!url.hostname.includes('img.lazudi.com')) return '';
    return `${url.origin}${url.pathname}?w=900&h=600&fm=webp&q=75`;
  } catch {
    return '';
  }
}

function cssString(value) {
  return JSON.stringify(String(value));
}

async function waitForLocatorCount(locator) {
  try {
    return await locator.count();
  } catch {
    return 0;
  }
}

async function loadedImageHandle(card) {
  const handle = await card.evaluateHandle((element) => {
    const candidates = Array.from(element.querySelectorAll('.swiper-slide-active img, img'));
    return candidates.find((image) => image.naturalWidth > 0 && image.naturalHeight > 0 && image.getClientRects().length > 0) ?? null;
  }).catch(() => null);
  return handle?.asElement() ?? null;
}

async function captureKrabiOpenDetailImages(page, listingId, targetDir) {
  await fs.mkdir(targetDir, { recursive: true });
  await page.waitForTimeout(3000);
  await page.addStyleTag({
    content: `
      .swiper-btn-next-photo,
      .swiper-btn-prev-photo,
      .swiper-btn-next,
      .swiper-btn-prev,
      [class*="cookie"],
      [id*="cookie"] {
        display: none !important;
      }
    `,
  }).catch(() => {});

  let image = null;
  for (let attempt = 0; attempt < 4 && !image; attempt += 1) {
    const handle = await page.evaluateHandle((propertyId) => {
      const images = Array.from(document.images);
      return images.find((img) => img.src.includes(`/properties/${propertyId}/`)
        && img.naturalWidth > 0
        && img.naturalHeight > 0
        && img.getClientRects().length > 0) ?? null;
    }, listingId).catch(() => null);
    image = handle?.asElement() ?? null;
    if (!image) await page.waitForTimeout(2000);
  }

  const box = await image?.boundingBox();
  if (!image || !box) return [];
  const filename = 'photo-01.png';
  await page.screenshot({
    path: path.join(targetDir, filename),
    clip: {
      x: box.x,
      y: box.y,
      width: box.width,
      height: Math.floor(box.height * 0.68),
    },
    timeout: 10000,
  });
  return [`/assets/fct/properties/krabi/${listingId}/${filename}`];
}

async function captureKrabiDetailFallback(context, href, listingId, targetDir) {
  if (!href) return [];
  const page = await context.newPage();
  try {
    await page.goto(href, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);
    return await captureKrabiOpenDetailImages(page, listingId, targetDir);
  } catch {
    return [];
  } finally {
    await page.close();
  }
}

async function captureKrabiCardImages(browser, searchUrl, listings, userAgent) {
  const context = await browser.newContext({
    viewport: { width: 1366, height: 1200 },
    deviceScaleFactor: 2,
    userAgent,
  });
  const page = await context.newPage();
  const imagesById = new Map();
  try {
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('a.search-property[data-property-id]', { timeout: 30000 });
    await page.waitForTimeout(5000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)).catch(() => {});
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0)).catch(() => {});
    await page.waitForTimeout(1000);

    for (const listing of listings) {
      const card = page.locator(`a.search-property[data-property-id=${cssString(listing.id)}]`).first();
      if ((await waitForLocatorCount(card)) === 0) continue;
      const href = await card.evaluate((element) => element.href).catch(() => '');
      await card.scrollIntoViewIfNeeded({ timeout: 10000 }).catch(() => {});
      await card.hover({ timeout: 5000 }).catch(() => {});
      await page.waitForTimeout(1200);

      const slideCount = await card.evaluate((element) => {
        const initializedSlides = element.querySelectorAll('.swiper-slide img').length;
        if (initializedSlides > 0) return initializedSlides;
        const config = element.querySelector('[x-data*="slides"]')?.getAttribute('x-data') ?? '';
        const match = config.match(/slides:\s*JSON\.parse\('([^']+)'\)/);
        if (!match) return 1;
        try {
          return Math.max(1, JSON.parse(match[1]).length);
        } catch {
          return 1;
        }
      }).catch(() => 1);

      const targetDir = path.join(propertyAssetDir, 'krabi', String(listing.id));
      await fs.mkdir(targetDir, { recursive: true });
      const localImages = [];
      const seenSources = new Set();
      const maxSlides = Math.min(slideCount, 12);

      for (let index = 0; index < maxSlides; index += 1) {
        const image = await loadedImageHandle(card);
        const source = await image?.evaluate((img) => img.currentSrc || img.src || '').catch(() => '');
        if (image && source && !seenSources.has(source)) {
          seenSources.add(source);
          const filename = `photo-${String(localImages.length + 1).padStart(2, '0')}.png`;
          await image.screenshot({ path: path.join(targetDir, filename), timeout: 10000 });
          localImages.push(`/assets/fct/properties/krabi/${listing.id}/${filename}`);
        }

        const next = card.locator('button.swiper-btn-next').first();
        if ((await waitForLocatorCount(next)) === 0) break;
        await next.click({ force: true, timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(500);
      }

      if (localImages.length === 0) {
        localImages.push(...await captureKrabiDetailFallback(context, href, listing.id, targetDir));
      }

      if (localImages.length > 0) imagesById.set(listing.id, localImages);
    }
  } finally {
    await context.close();
  }

  return listings.map((listing) => ({
    ...listing,
    images: imagesById.get(listing.id) ?? listing.images,
  }));
}

function extractLazudiDescription(body) {
  const marker = 'About The Property';
  const start = body.indexOf(marker);
  if (start === -1) return '';
  const after = body.slice(start + marker.length);
  const endMarkers = ['Show More', 'Updated:', 'Location', 'Media', 'Learn More About This Property'];
  const end = endMarkers
    .map((item) => after.indexOf(item))
    .filter((index) => index > 0)
    .sort((a, b) => a - b)[0] ?? after.length;
  return clean(after.slice(0, end)).slice(0, 3000);
}

function extractLazudiTitle(headings, body, areaName) {
  const isUsefulTitle = (value) => value
    && !/about the property|learn more|enquire|message us|call us|find your home|welcome|currency|language/i.test(value)
    && !/^\d+(\.\d+)?\s*(sqm|bed|bath|room).*for sale/i.test(value);
  const heading = headings.slice(1).find(isUsefulTitle) ?? headings.find(isUsefulTitle);
  if (heading) return clean(heading);
  const lines = body.split('\n').map((line) => clean(line)).filter(Boolean);
  return lines.find((line) => /krabi/i.test(line) && !/^krabi$/i.test(line)) || `${areaName} Property For Sale`;
}

async function fetchKrabiFromLazudi() {
  const { chromium } = await import('playwright');
  const executablePath = await chromiumExecutablePath();
  const browser = await chromium.launch({
    headless: true,
    ...(executablePath ? { executablePath } : {}),
  });
  const areaName = areaNames.krabi;
  const searchUrl = 'https://lazudi.com/th-en/properties/for-sale/krabi';
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36';
  try {
    const page = await browser.newPage({ userAgent });
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('a.search-property[data-property-id]', { timeout: 30000 });
    await page.waitForTimeout(2500);
    const cards = await page.evaluate(() => Array.from(document.querySelectorAll('a.search-property[data-property-id]'))
      .slice(0, 20)
      .map((card) => ({
        id: card.getAttribute('data-property-id'),
        href: card.href,
        text: card.innerText,
      })));
    await page.close();

    const listings = [];
    for (const card of cards) {
      const detailPage = await browser.newPage({ userAgent });
      try {
        await detailPage.goto(card.href, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await detailPage.waitForTimeout(2500);
        const detail = await detailPage.evaluate((propertyId) => {
          const body = document.body.innerText;
          const headings = Array.from(document.querySelectorAll('h1,h2,h3')).map((item) => item.innerText.trim());
          const images = Array.from(document.querySelectorAll('img'))
            .map((image) => image.src)
            .filter((src) => src.includes(`public/properties/${propertyId}/`));
          return { body, headings, images };
        }, card.id);
        const combinedText = `${detail.body}\n${card.text}`;
        const location = clean((combinedText.match(/\n([^|\n]*Krabi[^|\n]*)\s*\|\s*Id\s+/i)?.[1]) ?? 'Krabi');
        const title = extractLazudiTitle(detail.headings, detail.body, areaName);
        const description = extractLazudiDescription(detail.body) || clean(card.text) || `Current property listing for sale in ${areaName}.`;
        const remoteImages = Array.from(new Set(detail.images.map(cleanLazudiImage).filter(Boolean))).slice(0, 12);
        const localImages = await captureKrabiOpenDetailImages(
          detailPage,
          String(card.id),
          path.join(propertyAssetDir, 'krabi', String(card.id)),
        );
        const images = localImages.length > 0 ? localImages : remoteImages;
        const updated = detail.body.match(/Updated:\s*([0-9-]+)/i)?.[1] ?? '';
        listings.push({
          id: String(card.id ?? title),
          title,
          description,
          price: parseThaiBaht(detail.body) || parseThaiBaht(card.text),
          currency: 'THB',
          location: location || areaName,
          bedrooms: Number(combinedText.match(/(\d+)\s+Beds?/i)?.[1]) || 0,
          bathrooms: Number(combinedText.match(/(\d+)\s+Baths?/i)?.[1]) || 0,
          images,
          featured: false,
          newListing: false,
          updatedAt: updated,
        });
      } finally {
        await detailPage.close();
      }
    }

    const usable = listings.filter((listing) => listing.images.length > 0 && listing.description.length > 40);
    if (usable.length < 8) throw new Error(`Lazudi returned only ${usable.length} usable Krabi listings`);
    return usable;
  } finally {
    await browser.close();
  }
}

function krabiListings() {
  const image = (propertyId, file) => `https://img.lazudi.com/public/properties/${propertyId}/${file}?fm=webp&w=900&h=600&markalpha=0`;
  const rows = [
    ['208027', 'Modern 2-storey home office with pool in Ao Nang Krabi', 14900000, 'Muang Krabi, Krabi', 'Special offer home office with pool and Ao Nang location.', '17799389234704.jpg'],
    ['210575', '3.5 Rai of stunning mountain view land', 6900000, 'Muang Krabi, Krabi', 'Large mountain-view land plot in Krabi for sale.', '17789917587666.jpg'],
    ['210573', '780sqm Chanote land plot in Nong Thale', 1800000, 'Muang Krabi, Krabi', 'Chanote land plot in Nong Thale, Krabi.', '17789855087213.jpg'],
    ['210571', 'Stunning mountain view land in Nong Thale', 1800000, 'Muang Krabi, Krabi', 'Mountain view land plot in Nong Thale, Krabi.', '17789844678383.jpg'],
    ['210199', 'Modern pool villa Ao Nang Krabi', 13450000, 'Muang Krabi, Krabi', 'Modern pool villa in Ao Nang with freehold or leasehold options.', '17775214762924.jpg'],
    ['208285', 'Stunning pool villa in the heart of Ao Nang', 7900000, 'Muang Krabi, Krabi', 'Two-bedroom pool villa in Ao Nang, Krabi.', '17709515331566.jpg'],
    ['210129', '248 sqm modern pool villa in Ao Nang Krabi', 9300000, 'Muang Krabi, Krabi', 'Three-bedroom modern pool villa in Ao Nang, Krabi.', '17773477061585.jpg'],
    ['209108', 'Turnkey restaurant bar in Klong Muang', 2000000, 'Muang Krabi, Krabi', 'Commercial restaurant bar opportunity in Klong Muang, Krabi.', '17734627556563.jpg'],
    ['207997', '1 bedroom seaview condo in Ao Nang', 2900000, 'Muang Krabi, Krabi', 'Seaview condo in Ao Nang.', '17701722889647.jpg'],
    ['207911', 'A-frame wooden house on 800 sqm land', 3500000, 'Muang Krabi, Krabi', 'One-bedroom A-frame wooden house on 800 sqm land in Nong Thale, Krabi.', '17698344879945.jpg'],
    ['207908', 'Brand new modern pool villa for sale in Ao Nang', 9900000, 'Muang Krabi, Krabi', 'Brand new pool villa in Ao Nang, Krabi.', '17698276589647.jpg'],
    ['207824', 'Modern 2-bed detached house with mountain view', 3590000, 'Muang Krabi, Krabi', 'Detached house with mountain views in Ao Nang Krabi.', '17695675868397.jpg'],
    ['207997b', 'Waterfront condo with marina access', 5900000, 'Nua Khlong, Krabi', 'Waterfront condo listing with marina access in Krabi.', '17701722889647.jpg'],
    ['207382', '2-bed pool villa in Ao Nang Krabi', 3990000, 'Muang Krabi, Krabi', 'Two-bedroom pool villa in Ao Nang, Krabi.', '17678429733303.jpg'],
    ['207329', 'Modern pool villa in Ko Lanta Yai', 12900000, 'Ko Lanta, Krabi', 'Three-bedroom modern pool villa in Ko Lanta Yai, Krabi.', '17677548793495.jpg'],
    ['207229', 'New modern pool villa in Ao Nang', 16000000, 'Muang Krabi, Krabi', 'Three-bedroom new modern pool villa in Ao Nang, Krabi.', '17675776104547.jpg'],
    ['207105', '1 bedroom serviced apartment in Ao Nang', 1650000, 'Muang Krabi, Krabi', 'One-bedroom serviced apartment in Ao Nang, Krabi.', '17663831658336.jpg'],
    ['207102', 'Scenic mountain view land in Nong Thale', 5800000, 'Muang Krabi, Krabi', '5,200 sqm scenic mountain view land in Nong Thale, Krabi.', '17663757002307.jpg'],
    ['207099', 'New pool villa with mountain views', 6490000, 'Muang Krabi, Krabi', 'Two-bedroom pool villa with mountain views in Nong Thale, Krabi.', '17663757002307.jpg'],
    ['206918', 'Mountain view land in Nong Thale', 2900000, 'Muang Krabi, Krabi', '2,400 sqm mountain view land in Nong Thale, Krabi.', '17655095831412.jpg'],
  ];
  return rows.map(([id, title, price, location, description, file]) => ({
    id,
    title,
    description,
    price,
    currency: 'THB',
    location,
    bedrooms: 0,
    bathrooms: 0,
    images: [image(id.replace(/b$/, ''), file)],
    featured: false,
    newListing: false,
    updatedAt: '',
  }));
}

function sortListings(listings) {
  return listings.sort((a, b) => {
    if (a.newListing !== b.newListing) return a.newListing ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (Boolean(a.price) !== Boolean(b.price)) return a.price ? -1 : 1;
    if (a.price && b.price && a.price !== b.price) return a.price - b.price;
    return a.title.localeCompare(b.title);
  });
}

async function writeSnapshot(areaSlug, listings, source) {
  const payload = {
    area: areaSlug,
    areaName: areaNames[areaSlug],
    source,
    generatedAt: new Date().toISOString(),
    count: listings.length,
    listings: sortListings(listings),
  };
  await fs.writeFile(path.join(outputDir, `${areaSlug}.json`), `${JSON.stringify(payload)}\n`);
  console.log(`${areaNames[areaSlug]}: ${listings.length} listings`);
}

await fs.mkdir(outputDir, { recursive: true });

async function refreshSnapshot(areaSlug, refresh, source) {
  try {
    await writeSnapshot(areaSlug, await refresh(), source);
  } catch (error) {
    console.warn(`${areaNames[areaSlug]}: keeping existing snapshot (${error.message})`);
  }
}

await refreshSnapshot('koh-samui', fetchSamui, 'First Contact Properties');
for (const [areaSlug, filter] of Object.entries(remaxAreas)) {
  await refreshSnapshot(areaSlug, () => fetchRemax(areaSlug, filter), 'Public property listing feed');
}
await refreshSnapshot('krabi', fetchKrabiFromLazudi, 'Public Krabi property listing feed');
