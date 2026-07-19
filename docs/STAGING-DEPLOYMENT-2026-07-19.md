# Standalone staging deployment - 2026-07-19

## Deployed state

- Public staging URL: `https://firstcontactthailand.com/staging/`
- Source repository: `https://github.com/Mattglynn123/firstcontactthailand.git`
- Source branch: `codex/standalone-rebuild`
- Deployed source commit: `4ca4a62f1a576870213a4b9506b1293c9c202db5`
- Server source checkout: `/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone`
- Staging document root: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging`
- Retained rollback: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging-rollback-20260719-191509`

The staging output is a static Astro build based on the current public visual reference and Mat's recovered July 7-15 content history. Production WordPress and its document root were not modified.

## Package verification

- Archive SHA-256: `350bc52fadce3a7891d9a127db3185e89e234c4fbf02154a3d4de925f67701e6`
- Remote hash verified before extraction.
- Deployed inventory: 251 files, 47,106,558 bytes.
- Generated routes: 128.
- Broken internal links: 0.
- WordPress runtime references: 0.
- Search indexing disabled with `noindex,nofollow` and `X-Robots-Tag`.

## Public verification

The priority routes were checked directly on the public IONOS staging URL after the atomic directory swap:

- Home
- Local Business Network
- Community Events
- Health & Fitness
- Hire
- Local Deals
- Property
- Tours
- Contact

Each route returned HTTP 200, rendered one H1, one site header and one footer, loaded its visible media, contained no WordPress runtime references and had no horizontal overflow. The same routes passed at a 390 x 844 mobile viewport, and the mobile navigation opened correctly.

## Approval boundary

The previous staging build remains available at the rollback path above until Mat approves this version. Production replacement remains a separate operation requiring explicit approval, a fresh production backup, a maintenance window and a tested rollback plan.
