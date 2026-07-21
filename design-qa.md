# First Contact Thailand - Design QA

Review date: 2026-07-21

## Reference hierarchy

1. Mat's explicit July 20 requirements and recovered July 7-15 change history.
2. The current public WordPress pages for copy, images, navigation relationships and stable visual identity.
3. Server-side history and WordPress exports where the public render was duplicated, collapsed or otherwise unreliable.

Production WordPress remained read-only. Visible source defects were recorded as evidence but were not reproduced in Astro.

## Acceptance matrix

| Area | Acceptance criterion | Result |
| --- | --- | --- |
| Property navigation | Property Overview plus a nested Property Sales menu | passed |
| Property Overview | Sales, Management, Building Contractors and Buyers Agent | passed |
| Property Sales | Koh Samui, Koh Phangan, Bangkok, Pattaya, Phuket, Krabi, Chiang Mai and Hua Hin | passed |
| Property catalogues | Regional page, filters, sorting, pagination, gallery and enquiry flow | passed |
| Homepage | Community links, testimonials and category cards retained | passed |
| Events | Correct regional current-event images and region-specific past-event archives | passed |
| Charity | Correct local images and internal Rotary programme summaries | passed |
| Move to Thailand | One complete guide page | passed |
| Better Tour Guide | Commissions, pre-bookings and Gold Membership content retained | passed |
| Local Deals | One claim CTA at the bottom of the page | passed |

## Build and structural QA

- `npm run build:staging`: passed.
- Static HTML pages generated: 185.
- Broken internal links or local asset references: 0.
- Pages without exactly one H1: 0.
- Property JSON paths rewritten for `/staging/`: 8 of 8.
- References to `wp-content`, `wp-includes`, `wp-json` or `live-website.com`: 0.
- Secret scan across source and evidence files: 0 findings.
- `git diff --check`: passed.

## Visual and interaction QA

- Desktop viewport: 1440 x 1000.
- Mobile viewport: 390 x 844.
- Source and implementation captures were opened together for the homepage, Pattaya events, Phuket charity, Property Sales and a regional property catalogue.
- In-app Browser verified image loading, overflow, headings, cards, CTAs, footer completion and mobile menu states.
- Chrome independently verified the same priority routes and reported no console errors.
- Mobile Property navigation was opened through both nested levels and exposed the overview plus all eight regional sales links.
- Regional event checks covered current cards, images and region-specific archive destinations.
- Regional charity checks covered programme images, internal summaries and Rotary attribution.
- Property checks intentionally validate the page, interface and first rendered results only; they do not exhaustively crawl thousands of catalogue entries.

Evidence is stored in `docs/design-qa-evidence/`, with source evidence in `docs/source-audit-20260720/` and the content reconciliation in `docs/source-audit-20260720/content-gap-matrix.md`.

## Iteration history

The earlier reconstruction treated an incomplete generated mirror as authoritative. That caused generic fallbacks, missing regional relationships and collapsed layouts. This pass rebuilt the affected routes from public source evidence and Mat's recovered history, then added explicit route-level checks for every major issue he reported.

No P0, P1 or P2 issue remains in the validated local build. Public staging receives a separate post-deployment browser verification before handoff.

## Release boundary

This report approves staging only. Replacing production requires Mat's visual sign-off, a fresh production backup and the documented atomic rollback procedure.

Final result: **passed**.
