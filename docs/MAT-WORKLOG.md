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

## 2026-07-22 - Review fixes for events, charity, enquiry links and homepage cards

- Request: fix Mat's review notes across the non-live standalone site, including event pages, event photos, charity pages, enquiry routing, homepage testimonials alignment, the missing homepage property image, and the latest Samui property listing order.
- Scope: rebuilt the property snapshots from the automated listing feed, kept the newest Samui Zeemui listing first, made property overview support cards open the standard enquiry form, normalized legacy enquiry parameters on the contact form, routed health, hire, local deals, events and charity CTAs to the standard enquiry form, fixed the Full Moon event link to the flyer, confirmed Chiang Mai and other events pages generate, fixed Pattaya past-event imagery, made charity cards use the same readable image/text sizing, left-aligned the homepage testimonials heading, and replaced the missing homepage property card image with an existing property asset.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: Astro build, local preview checks on desktop and mobile for the reported pages, 185-page internal link and asset audit, and git diff validation.
- Status: complete for the review fixes in this pass.

## 2026-07-23 - Remove Rotary source link from charity detail pages

- Request: remove the `Visit the official Rotary source` line from all charity pages.
- Scope: removed the shared source link from the charity program detail template so every charity extra-info page keeps the program wording and enquiry CTA without the external Rotary source link.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: Astro build and desktop/mobile local preview checks on representative Pattaya, Samui, Bangkok and Phuket charity detail pages.
- Status: complete.

## 2026-07-23 - Latest standalone review fixes

- Request: fix the latest non-live review notes for Pattaya past-event photos, Samui sales new-listing badges, the Move to Thailand page, the standard enquiry link, homepage bottom cards, health page links, and non-Samui event pages.
- Scope: replaced Pattaya past-event placeholders with event-relevant photos, limited red property `New Listing` badges to the feed's explicit new-listing flag, matched the live Moving to Thailand/Samui top wording and card order, verified the customise-your-tour and health enquiries use the standard enquiry form, removed old contact aliases from the review index, kept the testimonials heading on one line, renamed the homepage Vehicle Rental card to Hire, added homepage cards for Charities and Health & Fitness, and added past/upcoming event cards for Bangkok, Chiang Mai, Hua Hin, Koh Phangan, Krabi, Pattaya and Phuket while leaving Samui unchanged.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: Astro build, all-page internal link and first-party asset audit, desktop/mobile local preview checks on the homepage, Health & Fitness, Samui sales, Pattaya and Phuket past events, all non-Samui regional events pages, Moving to Samui, representative charity detail pages, and the standard enquiry form.
- Status: complete for this review pass.

## 2026-07-23 - Remove Moving to Thailand help wording and fix related review links

- Request: remove the `How First Contact Can Help` heading and the following trusted local support paragraph from the Moving to Thailand page, fix the Other Tours CTA/page behaviour, and correct the Property Overview link.
- Scope: removed the requested heading and paragraph from the standalone Moving to Thailand page while keeping the contact CTA link available, cleaned the Other Tours page title and enquiry CTA to use the standard local enquiry form, and standardised internal Property Overview links to `/property/` while keeping legacy aliases available.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: Astro build and desktop/mobile local preview checks on the Moving to Thailand page, Other Tours page, property overview route, and standard enquiry form.
- Status: complete.

## 2026-07-23 - Event photos, 31 July flyer and charity detail pages

- Request: fix irrelevant Phuket and Pattaya event photos, update the Tours Full Moon flyer to 31 July, remove Samui/island-specific wording from Moving to Thailand, keep charity more-info pages internal, remove `Rotary` from the Pattaya drinking water card, and standardise enquiry links.
- Scope: added new local Pattaya Marathon, Phuket Community Market, and 31 July Full Moon flyer assets, wired current event and Tours cards to those assets, added event image fallbacks, expanded charity extra-info pages into a four-card internal summary layout, kept charity cards pointing to internal more-info pages, renamed Pattaya `Drinking Water`, changed Moving to Thailand wording to Thailand-wide language, and converted legacy contact links to the local standard enquiry form.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: Astro built 185 pages; generated-page audit found no stale contact anchors, no external charity source anchors, no old AI charity-source wording, no missing event-card images, and no Phuket Samui-flyer reuse; full-site link/first-party-asset audit passed across 185 pages; desktop and mobile browser checks passed for Phuket and Pattaya events, Tours, Moving to Thailand, Pattaya charity, Pattaya Drinking Water, Samui Surf Lifesaving Club, the duplicate Chiang Mai charity route, and the standard enquiry form.
- Status: complete.

## 2026-07-23 - All-page enquiry and charity rules review

- Request: check every page before Mat reviews again, especially the standard enquiry-form rule and charity page rules.
- Scope: enforced charity-card image fallbacks and eager image loading across regional charity pages, expanded the shared charity detail template so each internal extra-info page has four richer program-specific sections, and kept the build-synced property listing snapshots current.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: property listing sync completed for all property regions; Astro built 185 pages; generated-site audit passed across all 185 pages for broken internal links/assets, visible CTA enquiry routing, event-card images, charity-card images, charity detail-card counts/images, old Rotary-source wording, and old placeholder links; desktop and mobile Chrome checks passed on the standard enquiry form, representative charity region/detail pages, Pattaya and Phuket events, Moving to Thailand, and Tours.
- Status: complete.
