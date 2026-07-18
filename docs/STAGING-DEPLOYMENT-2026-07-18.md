# Standalone staging deployment - 2026-07-18

## Deployed state

- Public staging URL: `https://firstcontactthailand.com/staging/`
- Source repository: `https://github.com/Mattglynn123/firstcontactthailand.git`
- Source branch: `codex/standalone-rebuild`
- Deployed source commit: `1233b20a99b5ffc15e417c1d1bc93fa1aa173f77`
- Server source checkout: `/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone`
- Staging document root: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging`
- Retained rollback: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging-rollback-20260718-211352`

The public staging output is a static Astro build. It does not load WordPress, `wp-content`, `wp-includes`, the WordPress REST API, Wix media, or remote WordPress layout assets.

## Package verification

- Archive SHA-256: `9c263ecdaf5ee0a6149548e95c3d85b20cccc816d1d08ac6c065deb3326125f9`
- Remote hash verified before extraction.
- Deployed inventory: 242 files, 42,439,030 bytes.
- Staging root reference errors: 0.
- WordPress runtime references in the package: 0.

## Public QA

The complete QA suite ran directly against the public IONOS staging URL after the atomic directory swap.

- HTTP status: 200
- Routes checked: 128
- Responsive screenshots: 55
- Broken internal links: 0
- Route failures: 0
- Responsive screenshot failures: 0
- Search indexing: disabled with `noindex,nofollow`

The public report is stored in `docs/qa/report.json`. Production WordPress and its document root were not modified.

## Approval and rollback

The previous staging build remains available at the rollback path above until Mat approves this version. Production replacement remains a separate operation requiring explicit approval, a fresh production backup, a maintenance window and a verified rollback plan.
