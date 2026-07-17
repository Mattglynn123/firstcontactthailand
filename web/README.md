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

The IONOS account does not provide a system Node.js runtime. A verified, unprivileged runtime is therefore installed in the ignored `.server-tools/node` directory. Run project commands through the wrapper from the repository root:

```sh
./web/scripts/server-node.sh node --version
./web/scripts/server-node.sh npm --prefix web ci
./web/scripts/server-node.sh npm --prefix web run build
./web/scripts/server-node.sh npm --prefix web run dev -- --host 127.0.0.1
```

Use VS Code or Codex SSH port forwarding to view the development server. Do not point the public domain at a development process.

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
