# Standalone staging deployment - 2026-07-17

## Deployed state

- Public staging URL: `https://firstcontactthailand.com/staging/`
- Source repository: `https://github.com/Mattglynn123/firstcontactthailand.git`
- Source branch: `codex/standalone-rebuild`
- Source commit: `7fb11643edf342b5f96c0cb3216054e590d9d5a0`
- Server source checkout: `/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone`
- Staging document root: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging`
- Rollback directory: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging-rollback-20260717-2127`

The staging package is a static Astro build. Its public output does not load WordPress, `wp-content`, `wp-includes`, the WordPress REST API, or remote WordPress layout assets.

## Deployment verification

- Archive SHA-256 verified on IONOS before extraction.
- Final remote inventory: 206 files, 40,553,852 bytes.
- Public response: HTTP 200.
- Public title: `First Contact Thailand | Trusted Local Connections`.
- Search indexing disabled on staging with `noindex,nofollow` and `robots.txt`.
- WordPress runtime markers in the public staging HTML: none.

## Public QA

The full Playwright suite ran directly against the public IONOS staging URL after deployment.

- Routes checked: 106
- Responsive screenshots: 55
- Broken internal links: 0
- Route failures: 0
- Screenshot failures: 0

The report is stored in `docs/qa/report.json`. Production WordPress and its document root were not modified.

## Mat workflow

The canonical source is GitHub. Mat can open the server checkout over SSH and work only in `firstcontactthailand-standalone`. Before editing, he should fetch and fast-forward the current branch. Changes should be committed and pushed to GitHub before a new staging build is deployed.

The legacy server repository `first-contact-thailand-code-repo` remains untouched and must not be used for standalone site changes.
