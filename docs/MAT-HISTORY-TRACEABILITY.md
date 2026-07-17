# Mat Implementation History Traceability

This record proves how Mat's server-side visual fixes were preserved in the standalone Astro rebuild without copying the WordPress runtime patches.

## Audited Sources

- IONOS server repository history through commit `c7cc69a`.
- Recovered local history branch `codex/mat-local-history-july7-15` at `fc5bf923`.
- Recovered requirements and source patch in `docs/recovery-mat-july7-15/`.
- Captured live desktop and mobile references in `docs/design-reference/`.

## History To Astro Mapping

| Mat/server history | Required outcome | Standalone implementation and evidence |
| --- | --- | --- |
| `58930e8`, `64e9085`, `c7cc69a` | Stable event CTA layout, including Phuket | Shared event CTA/button patterns; community and regional event routes are included in responsive QA. |
| `8337fdc`, `0c175f1` | Clear Local Deals headings and CTA | Dedicated Local Deals page with shared navy headings, local imagery and one consistent enquiry CTA. |
| `0c175f1`, `bf86aa5` | Stable Hire heading sizes | Dedicated Hire page uses the shared responsive hero and heading scale. |
| `1882b7b` | Consistent Pattaya charity imagery | Pattaya charity route retains its local program imagery and is included in responsive QA. |
| `86bcef3`, `8dea118`, `3a0f093`, `673c6fe`, `c4b091b` | Mobile pages must wrap and scroll normally | The Astro layout has no injected visibility rules; every generated route is checked for horizontal overflow and priority pages are captured at 390 px. |
| `ff05571` | Remove the broken old Hire mobile layout | One semantic Hire component tree replaces the duplicate legacy render. |
| `822eb5e` | Remove the broken old Local Business Network mobile layout | One semantic business-card grid replaces the duplicate legacy render. |
| `1096698`, `e4a55bb` | Property Sales must remain visible and standalone | Dedicated `/property-sales/` route and explicit property service routes; Property Sales is included in responsive QA. |
| Recovered July 7-15 stash | Preserve Mat's latest content, wording, media and page priorities | Recovered source changes were applied before the clean shared component rebuild; media is local under `web/public/assets/fct/`. |

## Explicit Exclusions

The final Astro source does not copy the WordPress MU-plugin, SiteOrigin markup, DOM injectors, delayed scripts, display locks or theme overrides. Those files were evidence of Mat's intended result only.

## Validation Gate

`npm run qa` checks all generated routes for status, links, media, one H1, console errors, failed requests and horizontal overflow. It also captures the priority and history-critical routes on desktop, tablet and mobile.
