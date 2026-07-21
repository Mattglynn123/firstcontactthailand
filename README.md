# First Contact Thailand Standalone Website

The current website rebuild is a static Astro application in `web/`. It has no
WordPress, PHP, or database runtime dependency.

- Authoritative branch: `codex/standalone-rebuild`
- Approved staging: `https://firstcontactthailand.com/staging/`
- Mat setup: `GETTING-STARTED.md`
- New Codex task prompt: `CODEX-START-HERE.md`
- Controlled IONOS deployment: `docs/STAGING-DEPLOYMENT.md`

The legacy WordPress production site remains untouched until a separately
approved production cutover with backup and rollback.

From `web/`:

```sh
npm ci
npm run dev
npm run build
```

Never commit credentials, tokens, SSH keys, `.env` files, backups, or database
exports.

