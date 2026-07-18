# Server Correction Evidence

The July server commits are evidence of Mat's intended behavior. They are not code to copy into Astro.

## Confirmed Intent

- Local Business Network and Hire card grids collapse to two columns on tablet and one on mobile.
- Card text wraps normally with no clipping, transforms, animation locks, or zero-height sections.
- Event location pages use one or two consistent CTA rows with a maximum content width around 780px.
- Event imagery must match the location; Samui imagery must not leak into Hua Hin, Chiang Mai, Pattaya, Phuket, Bangkok, or Krabi pages.
- Property uses five clear pathways with blue, bold headings, left-aligned descriptions, full-width wrapping CTAs, and responsive layout.
- Tours uses three equal pathways on desktop and one column on mobile.
- Hire's main heading is black; service-card headings use the First Contact blue.
- Duplicate headings and duplicate rendered sections must be removed at the source.

## Rejected Legacy Techniques

- WordPress MU-plugin injectors.
- Generated mirror HTML as a runtime dependency.
- CSS `display` locks used to override earlier broken rules.
- Repeated inline style blocks or delayed JavaScript patches.
- WordPress theme or plugin dependencies in the standalone site.

## Astro Translation

These requirements must be implemented with Astro components, structured data, shared CSS, semantic links, local media, and responsive breakpoints. Each corrected route must be built and checked in a real browser before staging deployment.
