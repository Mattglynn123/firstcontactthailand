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

## 2026-07-23 - Final review cleanup before Mat re-check

- Request: finish the outstanding review issues before Mat re-checks the non-live standalone site.
- Scope: corrected the remaining health/events wording, cleaned the Moving to Thailand and regional moving guide helper wording, kept standard enquiry redirects for property support pages, refreshed property snapshots, rebuilt Krabi sales from the current public source with cleaned local listing output, added event-relevant images, expanded charity detail pages, removed external Rotary source CTAs, and kept Samui sales on the live Zeemui feed with red new-listing badges limited to new feed items.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: property listing sync completed for all property regions; Astro built 185 pages; all-page static audit passed across 185 pages for internal links, first-party assets, event-card images, charity-card images/details, visible enquiry routing, old charity wording, old Moving helper wording, old Beach Fitness text, and source-provider branding.
- Status: complete for this review pass; automated browser screenshots were not rerun because no Playwright/Chrome executable is available in this runtime, but the local preview is serving for Mat's manual review.

## 2026-07-23 - Query pages, Pattaya event image and Krabi property galleries

- Request: fix all query/enquiry pages, replace the duplicated Pattaya Bikini Beach Race image, and make Krabi property sales pull through multi-photo listing galleries from the current public Krabi source.
- Scope: converted `contact-link`, `contact-2`, and `contact-3` to the shared plain-background standard enquiry form with the topic dropdown; added a dedicated Pattaya Bikini Beach Race image; updated the Krabi property sync to scrape current Lazudi gallery image URLs, save clean local JPG galleries, and write those galleries into the Krabi listing snapshot; set opened property galleries to eager-load images; aligned Samui red `New` badges to listings updated in the last 3 days.
- Safety: worked only in the standalone Astro website under `web/`; production WordPress, the live site, and the server staging directory were not modified.
- Verification: property listing sync completed for all property regions; Astro built 185 pages; desktop and mobile Playwright checks passed for all three query/contact routes, Krabi sales cards/gallery, Samui sales new-badge count, and Pattaya community events.
- Status: complete.

## 2026-07-24 - Recover standard enquiry-form cleanup

- Request: recover and save the latest standard enquiry-form cleanup from the interrupted session.
- Scope: removed the small label above the `Contact Us` heading, removed the Email and Community contact boxes, kept WhatsApp as the direct contact option, and replaced the old submit note with the confidentiality message on the shared enquiry form used by `contact-link`, `contact-2`, and `contact-3`.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 185 pages; local source preview served on `http://127.0.0.1:4321/`; direct checks confirmed the recovered enquiry-form content is present.
- Status: complete.

## 2026-07-24 - Charity detail back CTA and Pattaya image cleanup

- Request: fix the Pattaya Young Entrepreneurs Fair extra-info images so the page does not repeat the same picture, and make the top charity detail back link use the standard CTA format on all charity pages.
- Scope: updated the shared charity detail image set for community-participation programs and changed the shared charity detail back link to the standard CTA style.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 185 pages; generated Pattaya Young Entrepreneurs Fair page has four unique detail images; all 43 generated charity detail pages use the standard CTA class on the back link.
- Status: complete.

## 2026-07-24 - Standard enquiry submit CTA

- Request: change the standard enquiry form submit control from `Prepare email` to `Submit`, and make it use the standard CTA format instead of the blue shaded button.
- Scope: updated the shared standard enquiry form button used by `contact-link`, `contact-2`, and `contact-3`.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 185 pages; generated `contact-link`, `contact-2`, and `contact-3` pages all show `Submit`, use the `page-cta` button class, and no longer contain `Prepare email`.
- Status: complete.

## 2026-07-24 - Beach CTA on standard enquiry submit

- Request: make the bottom CTA on the standard enquiry form use the beach-background CTA style so it does not look like the form fields above it.
- Scope: updated the shared standard enquiry submit button used by `contact-link`, `contact-2`, and `contact-3` to include the beach-background CTA class.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 185 pages; generated `contact-link`, `contact-2`, and `contact-3` pages all show `Submit` with the `page-cta page-cta--image contact-form__submit` classes.
- Status: complete.

## 2026-07-24 - Property, charity, events and enquiry cleanup

- Request: send standard enquiry forms directly to WhatsApp, remove agency references and visible agency marks from property sales pages, centre single bottom CTAs, restore footer social icons, add completed charity program archives, add top-right return CTAs on archive/detail pages, remove repeated event intro text, and rebuild Other Tours in the standard card layout.
- Scope: updated shared Astro components and public property snapshots only; added completed charity archives for Samui and Pattaya, including Samui Food 4 Life and Defibs plus the completed Covid programs; removed browser-side live property feed fetching from public pages so visitors use reviewed local snapshots.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 184 pages; local preview served on `http://127.0.0.1:4321/`; route checks passed for completed charity archives, regional charity pages, Other Tours, community and past events, Bangkok property sales, Moving to Thailand, and the standard enquiry form; static asset checks found no missing local assets.
- Status: complete for Mat's final review before any live-site decision.

## 2026-07-25 - Review fixes for charity images, health CTA and tour return links

- Request: remove duplicated and irrelevant images from Pattaya charity extra-info pages, change the Health & Fitness bottom CTA to the beach-background style with Mat's requested wording, and add a top-right `Return to homepage` CTA on tour extra-info pages.
- Scope: updated the shared charity detail image set, added dedicated Shop Local Too detail images and copy, added optional beach CTA support for priority pages, and added homepage return CTAs to tour detail routes.
- Safety: worked only in the standalone Astro website under `web/`; no server, deployment, or public site changes were made.
- Verification: Astro built 184 pages; generated-page checks confirmed the Pattaya Save a Childs Eyes detail page uses unique images, Shop Local Too no longer uses the football image, Health & Fitness uses the beach-background CTA with the requested wording, and tour detail pages include the top-right homepage return CTA.
- Status: complete for Mat's final review before any live-site decision.

## 2026-07-25 - Production launch asset preflight

- Request: continue the production launch path while keeping the live site unchanged until verification and approval.
- Scope: added production `robots.txt`, added an Astro sitemap endpoint covering static pages, migrated content pages, event routes, past-event routes, property-area routes and charity program routes, and added a branded 404 page.
- Safety: worked only in the standalone Astro website source; no server, staging, DNS, email, database or live-site files were modified.
- Verification: prepared for remote GitHub Actions build/QA because the laptop does not have enough free disk space for a full local production build.
- Status: pending remote build/QA verification.

## 2026-07-25 - Production artifact packaging

- Request: continue the approved production deployment using a verified root-domain build package.
- Scope: updated GitHub Actions to upload the production `web/dist/` output as a separate deployment artifact while keeping the existing QA/staging evidence artifact.
- Safety: no website content, server files, DNS, email or database settings were changed.
- Verification: pending GitHub Actions build/QA for the packaging commit before any live file swap.

## 2026-07-25 - Production cutover

- Request: Mat approved the production deployment after checking staging.
- Deployed source SHA: `406a3a0f7d7e99ba6d7cf24237b2161c236a661e`.
- Build source: GitHub Actions run `30157134102`, artifact `standalone-site-production`, SHA-256 `dd86a8864c2ac00290fe2bb860991761d0f2f1ac2e4a69c343801a6431465548`.
- Backup: current live files copied to `/homepages/31/d4299444035/htdocs/fct-backups/production-cutover-20260725-191613/live-files-copy` and database dumped to `/homepages/31/d4299444035/htdocs/fct-backups/production-cutover-20260725-191613/live-database.sql.gz`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260725-406a3a0`.
- Deployment destination: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand`.
- Verification: production homepage, priority routes, `robots.txt`, `sitemap.xml` and `404.html` returned HTTP 200; checked no `/staging/` dependency, no old runtime markers, no broken first-party links/assets on priority/recent routes, WhatsApp contact route present, and rendered smoke checks showed no broken images, no horizontal overflow and no console errors at the available browser viewport. GitHub Actions performed full build and responsive QA before deployment.
- Status: production cutover complete; DNS, SSL and email services were not changed.

## 2026-07-26 - Standard enquiry contact field wording

- Request: update the standard enquiry form field that said `Email` so it reads `Email or WhatsApp`.
- Scope: changed the shared contact field label and WhatsApp message line so the standard enquiry form accepts either an email address or a WhatsApp number.
- Safety: source-only Astro change, included in the verified 2026-07-26 live update below.
- Verification: GitHub Actions run `30187358218` passed; live `/contact-link/` returned HTTP 200 and contained `Email or WhatsApp`.

## 2026-07-26 - Samui charity program image cleanup

- Request: replace irrelevant images on Think Pink Samui, Koh Samui Surf Lifesaving Club, Support 4 Autism, and related Samui charity extra-info pages using more relevant Rotary Samui-Phangan references.
- Scope: added local Samui charity project images from the Rotary Samui-Phangan project pages and wired explicit detail-card image sets for the Samui charity programs so they no longer inherit unrelated regional fallback photos.
- Safety: source and public asset changes only, included in the verified 2026-07-26 live update below.
- Verification: GitHub Actions run `30187358218` passed; live Samui charity routes and new image assets returned HTTP 200.

## 2026-07-26 - Live update for contact field and Samui charity images

- Request: after the enquiry wording and Samui charity image fixes were completed, Mat approved pushing this update to the live site.
- Deployed source SHA: `07f672be742bb9651551abc1b7944fce602fb7f8`.
- Build source: GitHub Actions run `30187358218`, artifact `standalone-site-production`, SHA-256 `9f6feb84cdccb50315db31104b4f00c42dbd8fc92c90e7be2292df0273677786`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260726-1223-07f672b`.
- Deployment destination: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand`.
- Verification: live homepage, `/contact-link/`, `/think-pink-samui/`, `/koh-samui-surf-lifesaving-club/`, `/support-4-autism-samui/`, `/swim-4-life-samui/`, `robots.txt` and `sitemap.xml` returned HTTP 200; new Samui image assets returned HTTP 200; checked no `/staging/` dependency in the unpacked deployment.
- Status: live update complete; DNS, SSL and email services were not changed.

## 2026-07-30 - Local Business Network AI next steps

- Request: add a CTA under the AI block on Local Business Network and create an AI next-steps page using Mat's supplied headings, with a picture on each item.
- Scope: added the `AI Next Steps` CTA on `/local-business-network/` and created `/ai-next-steps/` with 18 AI topic cards, each using an existing local image asset.
- Deployed source SHA: `48a46d15757ad12b2885032aa55da0dcf299bce0`.
- Build source: GitHub Actions run `30510586527`, artifact `standalone-site-production`, SHA-256 `de313c7a647a7beca4cfd4e541cfb47810a5b4b12ab72277d8662eb870d84df3`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260730-1029-48a46d1`.
- Safety: Astro content/data-only change; DNS, SSL and email services were not changed.
- Verification: GitHub Actions build/QA passed; live `/local-business-network/` contained the `AI Next Steps` CTA and `/ai-next-steps/` returned HTTP 200 with Mat's requested headings and image references; selected AI page image assets, `robots.txt` and `sitemap.xml` returned HTTP 200.

## 2026-07-30 - AI next steps image refresh

- Request: replace repeated-looking images on the new AI Next Steps section so the pictures do not look copied from previous pages.
- Scope: created 18 lightweight dedicated AI topic graphics under `web/public/assets/fct/ai-next-steps/` and updated every AI Next Steps card to use a unique image from that folder.
- Deployed source SHA: `e6fa6d3638794b3d64f2eaa9c084146384d413c5`.
- Build source: GitHub Actions run `30518608134`, artifact `standalone-site-production`, SHA-256 `442d6285a8477df5729549c8bfe973c3df4d1b37fcd097ce83aabf223c1755af`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260730-1357-e6fa6d3`.
- Safety: Astro content/public-asset change only; DNS, SSL and email services were not changed.
- Verification: GitHub Actions build/QA passed; live `/ai-next-steps/` returned HTTP 200, referenced the new `assets/fct/ai-next-steps/` images, no longer referenced the repeated business images checked, and selected new PNG assets returned HTTP 200.

## 2026-07-30 - AI next steps photo reinstatement

- Request: reinstate the photo-style pictures on AI Next Steps and only change the pictures that were repeated.
- Scope: restored the original photo-style image set, changed the repeated AI Business Start Up Pack and Meta cards to different photo assets, and removed the generated AI graphic asset folder from the active branch.
- Deployed source SHA: `ef705179f362bb0764b3f45f51eac77d37bbeaf0`.
- Build source: GitHub Actions run `30521791888`, artifact `standalone-site-production`, SHA-256 `159460bbf5ddd08de24fd67951a40951722b2e52826c00d9036bc9afd6e2e11e`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260730-1508-ef70517`.
- Safety: Astro content/public-asset change only; DNS, SSL and email services were not changed.
- Verification: GitHub Actions build/QA passed; live `/ai-next-steps/` returned HTTP 200, restored photo-style card images, included the two replacement photo assets, removed generated graphic references, and selected image assets returned HTTP 200.

## 2026-07-30 - AI layout and charity image corrections

- Request: remove the AI meetup flyer from the AI Next Steps page, replace the eight unrelated AI photos with computer/AI-style photos, make the AI page use the same card-grid format as other extra-info pages, remove visible email addresses, replace the homepage Charities tile ocean image, replace the Pattaya Drinking Water hands image, and check charity pages for repeated or irrelevant fallback pictures.
- Scope: added a dedicated `/ai-next-steps/` Astro route using the shared `PriorityPage` layout, added local AI topic photos for the requested cards, removed visible email links from the shared header/footer, changed charity fallbacks away from the ocean image, changed Pattaya Drinking Water to the water-glass image, added three compressed shared charity topic images, and updated charity detail image sets to avoid duplicate first-image fallback.
- Deployed source SHA: `a707e7a459f7ad099ce0d11068d91394a970448a`.
- Build source: GitHub Actions run `30528221832`, artifact `standalone-site-production`, SHA-256 `a9881e9aaf78389e7a39d98c617b489682c2e9348c222cbdc508b5bfd57e0571`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260730-0520-a707e7a`.
- Safety: Astro source/public-asset change only; DNS, SSL and mail services were not changed.
- Verification: GitHub Actions build/QA passed; live homepage, `/ai-next-steps/`, `/pattaya-charity-programs/`, `/pattaya-save-a-childs-eyes/`, and `/contact-link/` returned HTTP 200; expected new image references were present; selected new image assets returned HTTP 200; checked no visible email address or `mailto:` on the verified live pages; Save a Childs Eyes detail images were distinct.

## 2026-07-30 - AI repeated computer image fix

- Request: change one of the repeated-looking computer photos on the AI Next Steps page and take it live.
- Scope: replaced the `How AI Can Work With Meta` image and the `Samui Business Start Up Checklist` image so the obvious duplicated dashboard/table photos are no longer repeated.
- Deployed source SHA: `1448991b95b272e9155f89a3d758039eb1825fec`.
- Build source: GitHub Actions run `30532379522` passed.
- Rollback: previous live image files retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-asset-backup-20260730-1448991-ai-images`.
- Safety: live asset-only update to two existing image filenames; no DNS, SSL, mail or unrelated server files were changed.
- Verification: server SHA-256 matched local replacement files; public `/ai-next-steps/?v=1448991` returned HTTP 200 and referenced both image filenames; public asset hashes matched the uploaded replacement images.

## 2026-07-31 - Logo asset, property cards and Samui event updates

- Request: keep the existing homepage logo active, provide the new high-quality logo for Mat to reuse elsewhere, remove the green overlays from property sale images, change the duplicated Property Management overview picture, replace three reused Surf Club charity pictures with ocean/beach images, and update Samui weekly event dates so they roll forward automatically.
- Scope: restored the active header/footer logo file and sizing, saved the new square logo as a separate high-quality asset, removed property card and gallery overlay labels/masks, changed the Property Management tile to a different property image, updated the Surf Club detail cards to use beach/ocean photos instead of Swim 4 Life photos, and added a small Samui event date updater that calculates the next weekly event date in Thailand time.
- Safety: Astro source/public-asset change only; no domain, SSL, mail or unrelated server files were changed.
- Deployed source SHA: `5470194ef058b0c6486848cc9c30b120cc9e0662`.
- Build source: GitHub Actions run `30610293171`, attempt `2`, artifact `standalone-site-production`, SHA-256 `2743bfc2563b6fcae4973944777c43d72eaac0a0325aeb59233aa30810af23a8`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260731-0319-5470194`.
- Deployment destination: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand`.
- Verification: `git diff --check` passed locally. GitHub Actions `npm ci`, production build, preview, route/responsive QA and artifact upload passed. Live homepage, `/property/`, `/property-sales/koh-samui/`, `/koh-samui-surf-lifesaving-club/`, `/community-events/`, the active logo asset and the high-quality logo asset returned HTTP 200. Live content checks confirmed the Property Management image uses `house-2-scaled.jpg`, property overlay markers are absent, Surf Club uses the three beach/ocean images, stale July event dates are absent, and weekly date data is present.

## 2026-08-02 - AI page heading

- Request: change the visible heading on the AI Next Steps page to `Ai`.
- Scope: updated the visible priority-page title and matching markdown heading only; page cards, links, images and SEO title were left unchanged.
- Deployed source SHA: `444bc6f21d4d7829d02813e0da56a6a385e34e93`.
- Build source: GitHub Actions run `30729425938`, artifact `standalone-site-production`, SHA-256 `6395747be32d99d7ad29235570d11304c4745a258623608031f457da21752e2e`.
- Rollback: previous live root retained at `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand-rollback-production-20260802-0131-444bc6f`.
- Deployment destination: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand`.
- Verification: GitHub Actions build/QA passed. Live `/` and `/ai-next-steps/` returned HTTP 200; `/ai-next-steps/` contains `<h1>Ai</h1>` and no longer contains `<h1>AI Next Steps</h1>`.
