# First Contact Thailand - Standalone Site Rules

This repository contains the WordPress-free Astro website. The legacy WordPress
site is a production safety net only and is outside the development scope.

## Authoritative Source

- Repository: `https://github.com/Mattglynn123/firstcontactthailand.git`
- Working branch: `codex/standalone-rebuild`
- Public review URL: `https://firstcontactthailand.com/staging/`
- Application root: `web/`

Before any edit, run:

```sh
git fetch origin
git switch codex/standalone-rebuild
git pull --ff-only origin codex/standalone-rebuild
git status --short --branch
```

Stop if the branch is different, the pull cannot fast-forward, or tracked files
have unexplained changes.

## Scope

- Work only in this repository and branch.
- Source changes belong in `web/src/`, `web/public/`, `web/scripts/`, or project documentation.
- Do not inspect or edit WordPress, PHP, `wp-admin`, generated mirrors, rollback folders, old Codex workspaces, or previous branches.
- Do not edit the public staging directory directly. Deployments are controlled, atomic operations with rollback.
- Never commit passwords, tokens, cookies, SSH keys, `.env` files, backups, or database exports.

## Verification

From `web/`, install with `npm ci`, then run `npm run build` before committing.
For visual changes, start `npm run dev`, verify the affected pages at desktop,
tablet, and mobile widths, and check links, images, console errors, and overflow.

For every completed request, append a concise entry to `docs/MAT-WORKLOG.md`,
commit only the intended files, and push to `origin/codex/standalone-rebuild`.
Do this automatically before ending the task so completed work is never left
only on Mat's laptop. Never force-push, rewrite history, or use a destructive
reset. Confirm that the remote branch resolves to the new local `HEAD`, then
return the commit SHA, branch URL, verification performed, and any remaining risk.
