# Getting Started - Mat

## First-time setup

Install Node.js LTS and Git, then run:

```powershell
cd "$HOME\Documents"
git clone --branch codex/standalone-rebuild --single-branch https://github.com/Mattglynn123/firstcontactthailand.git
cd firstcontactthailand\web
npm ci
```

Open the folder `$HOME\Documents\firstcontactthailand` in the Codex desktop app.
Do not open the parent `Documents` folder or any previous website folder.

## Start a work session

Open a terminal in `firstcontactthailand` and run:

```powershell
git fetch origin
git switch codex/standalone-rebuild
git pull --ff-only origin codex/standalone-rebuild
git status --short --branch
cd web
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321/`.
The public approved staging version remains available at
`https://firstcontactthailand.com/staging/` for comparison.

Start a new Codex task in the repository folder and paste the complete prompt in
`CODEX-START-HERE.md`. After Codex verifies the branch and commit, describe one
specific change at a time.

Codex is instructed to document, commit, and push each completed change
automatically. Mat can still use this sentence to request an immediate checkpoint:

```text
Run the build and responsive checks. If they pass, commit this requested change and push only to origin/codex/standalone-rebuild. Return the commit SHA and branch URL. Do not deploy production.
```

At the end of every session, Mat should receive a commit SHA and this branch URL:
`https://github.com/Mattglynn123/firstcontactthailand/tree/codex/standalone-rebuild`.
If Codex does not provide both, ask: `Confirm that all completed work is committed and pushed, and verify that local HEAD matches the remote branch SHA.`
