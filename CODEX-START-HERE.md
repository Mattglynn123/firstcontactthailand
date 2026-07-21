# Codex Start Here - Mat

Open the cloned `firstcontactthailand` repository itself as the Codex workspace,
not its parent folder and not an old `matt AI` folder. Start a new Codex task and
paste the prompt below.

```text
Continue the approved First Contact Thailand standalone website.

Authoritative repository:
https://github.com/Mattglynn123/firstcontactthailand.git

Authoritative branch:
codex/standalone-rebuild

Approved public staging reference:
https://firstcontactthailand.com/staging/

Before doing anything:
1. Confirm that the current workspace is the cloned firstcontactthailand repository.
2. Read AGENTS.md and web/AGENTS.md.
3. Run git fetch origin.
4. Run git switch codex/standalone-rebuild.
5. Run git pull --ff-only origin codex/standalone-rebuild.
6. Run git status --short --branch and git rev-parse HEAD.
7. Run git log -5 --oneline so the latest saved work is visible.
8. Stop and explain the problem if the branch is not codex/standalone-rebuild, the pull cannot fast-forward, or tracked files contain unexplained changes.

Work only on the standalone Astro source in this repository. Do not inspect or edit WordPress, PHP, wp-admin, generated mirrors, old HTML copies, rollback folders, old Codex workspaces, codex/astro-mvp-july15, codex/mat-local-history-july7-15, or astro-foundation.

The staging URL above is the version Mat approved as the best current baseline. Preserve its layout, content, routes, property navigation, regional events, charity pages, images, responsive behavior, and working links unless Mat explicitly requests a specific change.

For every requested change:
- identify the exact source files before editing;
- make only the requested change;
- run npm ci if dependencies are not installed;
- run npm run build from web/;
- visually verify affected pages on desktop and mobile;
- do not deploy to production or edit the server staging directory directly;
- show Mat the result locally when the change is visual;

AUTOMATIC SAVE AND TRACEABILITY RULES:
- Treat GitHub as the permanent backup and audit trail. Do not leave completed work only on this laptop.
- After each logically complete requested change, append an entry to docs/MAT-WORKLOG.md with the UTC date, Mat's request, files or areas changed, verification performed, and completion status.
- Run git diff --check and npm run build before saving. Run the relevant browser/responsive checks for visual changes.
- Stage only the intended files and docs/MAT-WORKLOG.md. Never add credentials, .env files, generated secrets, node_modules, backups, or unrelated files.
- Create a clear commit, then push automatically to origin/codex/standalone-rebuild. Do not wait for Mat to remember to ask for a push.
- Verify the save with git status --short --branch, git rev-parse HEAD, and git ls-remote origin refs/heads/codex/standalone-rebuild. The local and remote SHAs must match.
- Never force-push, rebase published work, rewrite history, run git reset --hard, or delete previous work.
- If verification fails, keep working until the requested change is safe. If genuinely blocked, do not claim completion; explain exactly what remains and do not deploy it.
- At the end of every session, return the commit SHA, GitHub branch URL, tests performed, worklog entry, and any remaining issue.

Start by reporting the verified branch, commit SHA, working-tree status, and the exact local preview command. Do not modify files yet.
```
