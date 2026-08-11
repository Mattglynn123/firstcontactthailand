/**
 * Legacy WordPress migration left several duplicate/near-duplicate pages live
 * under different slugs (and a few client-side "redirect stub" pages using
 * <meta http-equiv="refresh">). Rather than delete them (old links/bookmarks
 * may still point at them), each duplicate is kept reachable but:
 *  - gets a canonical tag pointing at the primary page, and
 *  - gets a noindex,follow robots meta tag, and
 *  - is excluded from sitemap.xml.
 * This consolidates SEO ranking signal onto a single primary URL per topic.
 */
export const canonicalOverrides: Record<string, string> = {
  // contact-2 and contact-3 are handled directly in their .astro routes
  // (ContactPage.astro), since they aren't markdown-driven pages.
  'business-directory-2': 'business-directory',
  'property-clean': 'property',
  'real-estate': 'property',
  'tours': 'tours-2',
  'tours-clean': 'tours-2',
  'social-events-2': 'social-events',
  'carbikehire': 'car-bike-hire',
  'local-business-network-clean': 'local-business-network',
  'chiang-mai-charity-programs-2': 'chiang-mai-charity-programs',
  'charity-work': 'charity',
  'charities': 'charity',
};

/**
 * Static routes that only render a client-side <meta http-equiv="refresh">
 * redirect to a contact form. They have no indexable content of their own,
 * so they're excluded from the sitemap.
 */
export const redirectStubRoutes = ['/property-management/', '/buyers-agent/', '/building-contractors/'];

/**
 * Duplicate pages that are static .astro routes rather than markdown content
 * (so they aren't covered by canonicalOverrides). Handled directly in their
 * route files with canonicalPath/noindex props; excluded from the sitemap here.
 */
export const duplicateStaticRoutes = ['/contact-2/', '/contact-3/'];
