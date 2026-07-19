# First Contact Thailand - Design QA

Review date: 2026-07-19

## Reference and scope

- Visual reference: the current public site at `https://firstcontactthailand.com/`.
- Content corrections: Mat's recovered July 7-15 history and the conformity matrix in `docs/conformity/live-history-implementation-matrix.md`.
- Implementation: standalone Astro output with local repository assets only.
- Production WordPress was not modified.

## Build and technical checks

- Astro build: 128 generated routes.
- Broken internal links: 0.
- Missing local assets: 0.
- Generated references to WordPress runtime, `wp-content`, `wp-includes`, `wp-json`, live-website hosts or imported mirror assets: 0.
- Priority routes checked: home, Local Business Network, Community Events, Health & Fitness, Hire, Local Deals, Property, Tours and Contact.

## Responsive and visual checks

- Desktop comparison: completed against current public reference captures.
- Tablet verification: 768 x 1024, no horizontal overflow or visible broken media on priority routes.
- Mobile verification: 390 x 844, no horizontal overflow or visible broken media on priority routes.
- Mobile navigation: opens correctly, keeps all primary destinations visible and prevents the page behind it from becoming the active surface.
- Each priority route has one page H1, one site header and one footer.

## Intentional source corrections

The standalone build keeps the current public site's visual identity while removing defects from the WordPress render: duplicated or collapsed content, narrow card columns, missing source images, repeated calls to action and delayed DOM overrides. Mat's latest event, business-network and page-level content changes are preserved in structured Astro data and components.

## Release boundary

This approval target is staging only. Replacing the production WordPress site remains a separate operation requiring Mat's explicit approval, a fresh backup and a verified rollback procedure.

Final result: **passed**.
