# First Contact Thailand standalone site

This directory contains the WordPress-free First Contact Thailand website. Astro generates a fully static site from the code, content and media stored in this repository.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
npm run build
npm run build:staging
npm run qa
```

- `npm run dev` starts the development server.
- `npm run build` creates the production-root build in `dist/`.
- `npm run build:staging` creates the isolated IONOS `/staging/` package in `dist-staging/`.
- `npm run qa` audits every route and captures priority pages at desktop, tablet and mobile widths.

## IONOS server workspace

The standalone server checkout is:

```text
/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone
```

It tracks the GitHub branch `codex/standalone-rebuild`. The legacy `first-contact-thailand-code-repo` checkout is WordPress history and must not be used for standalone changes.

IONOS limits SSH processes to 768 MB of virtual memory. This is not sufficient for a reliable Astro/Vite build, so the server checkout is for source editing and Git operations only. Builds, responsive QA and staging packages run on GitHub Actions or a development workstation. Do not try to run the Astro development server from this shared hosting account.

## Git workflow

Before editing on the server:

```sh
git fetch origin
git checkout codex/standalone-rebuild
git pull --ff-only
git status
```

After verified changes:

```sh
git add <files>
git commit -m "Describe the verified change"
git push origin codex/standalone-rebuild
```

GitHub is the canonical source. Staging deployment remains a separate controlled step with a retained rollback directory. See `../docs/STAGING-DEPLOYMENT.md` and `../docs/STAGING-DEPLOYMENT-2026-07-17.md`.

See `../docs/MAT-SERVER-WORKFLOW.md` for Mat's exact server and Codex workflow.
