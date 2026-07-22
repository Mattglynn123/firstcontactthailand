# Mat Worklog

This is an append-only human-readable index of work completed through Mat's
Codex sessions. Git commit history remains the authoritative technical audit
trail. Each completed request must add one concise entry here in the same commit
as the source change.

## 2026-07-21 - Standalone branch handoff and QA reliability

- Request: prepare the approved staging version for Mat to manage from his own computer.
- Scope: established `codex/standalone-rebuild` as the only working branch, replaced outdated WordPress and old-branch instructions, and added an automatic end-of-task commit/push protocol.
- Reliability: added property image fallbacks and separated third-party image availability warnings from first-party QA failures.
- Verification: Astro built 185 pages; 185 routes and 55 responsive captures passed; 0 broken internal links, 0 route failures, and 0 responsive failures.
- Status: complete; production WordPress and the public staging directory were not modified.

## 2026-07-21 - GitHub Actions duration control

- Request: leave Mat with a reliable automatic GitHub backup and verification workflow.
- Scope: CI now validates all first-party routes, assets, layouts, and responsive captures without waiting for third-party property image payloads.
- Reason: external property image providers caused the otherwise successful audit to exceed GitHub's 15-minute job limit.
- Safety: unavailable provider images still use the local regional fallback; external media remains visible in the QA report as non-blocking warnings.
- Status: complete; no production or staging deployment was performed.

## 2026-07-22 - Property pages and shared content cleanup

- Request: bring standalone property sales pages closer to the live site, standardize shared cards and enquiry forms, remove the homepage events block, correct health and fitness cards, and replace AI wording on charity program pages.
- Scope: refreshed property snapshots, added live-style property search and read-full-description controls, standardized property card behaviour across all sales regions, tightened shared card image/text alignment, updated the standard enquiry form styling, restored the live health and fitness card set, removed the homepage calendar/events CTA, split homepage property and vehicle cards, matched the testimonial heading style, removed extra Local Business Network card CTAs, set the footer copyright year to 2024, simplified the Move to Thailand Guide to the live-style article layout, and hid Past Events, Krabi, and Koh Phangan from the Events dropdown.
- Safety: worked only in the standalone Astro site; production WordPress, the live site, and the server staging directory were not modified.
- Verification: property listing sync, Astro build, desktop/mobile visual checks, and git diff validation.
- Status: complete except the separate past-events inventory/picture recovery request, which remains a follow-up item.
