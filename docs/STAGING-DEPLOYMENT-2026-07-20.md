# Standalone Staging Deployment - 2026-07-20

## Release

- Public URL: `https://firstcontactthailand.com/staging/`
- Git branch: `codex/standalone-rebuild`
- Git commit: `e6d8da6b8446b4b2ad7dafb39e867cccda0648bc`
- Artifact SHA-256: `c0ad7966f9a4a7e9ce96a188285e3c06d7e4cf1a0fa438d844a8d1859f3ec0e9`
- Artifact files: 314

## Server paths

- Repository checkout: `/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone`
- Active staging: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging`
- Rollback: `/homepages/31/d4299444035/htdocs/clickandbuilds/FirstContactThailand/staging-rollback-20260720-025953`

## Procedure

1. Fast-forwarded the clean server checkout to the release commit.
2. Built the `/staging/` artifact and verified its local SHA-256 and file count.
3. Uploaded the archive and verified the same SHA-256 and byte size on the server.
4. Extracted into a new sibling directory and verified required route files.
5. Renamed the previous staging directory to the rollback path.
6. Atomically renamed the new directory to `staging`.

## Validation

- 175 Astro routes built.
- 0 broken internal links.
- 0 broken local media paths.
- 0 missing or duplicate H1s.
- 0 WordPress runtime references.
- Public desktop and mobile verification completed on the eight Mat-priority routes.
- Public mobile navigation exposes exactly `Property Overview` and `Property Sales` in the Property submenu.
- Production WordPress files and database were not modified.

Production cutover is not approved by this deployment. Mat's visual sign-off is required first.
