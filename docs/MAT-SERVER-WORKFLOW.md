# Mat server workflow

## One source of truth

Use only this repository and branch:

- Repository: `https://github.com/Mattglynn123/firstcontactthailand.git`
- Branch: `codex/standalone-rebuild`
- IONOS checkout: `/homepages/31/d4299444035/htdocs/firstcontactthailand-standalone`
- Public staging: `https://firstcontactthailand.com/staging/`

Do not work in `matt AI`, a WordPress mirror, `first-contact-thailand-code-repo`, a generated HTML directory, or a previous Codex workspace.

## Start each Codex task

Open the IONOS checkout over SSH, then give Codex this instruction:

```text
Work only in /homepages/31/d4299444035/htdocs/firstcontactthailand-standalone on branch codex/standalone-rebuild.

This is the standalone Astro website. Do not inspect or edit WordPress, the legacy first-contact-thailand-code-repo, generated mirrors, staging output, rollback directories, or production.

Before editing, run git fetch origin, git checkout codex/standalone-rebuild, git pull --ff-only, and git status. Stop if the working tree is not clean or if the branch cannot fast-forward.

Make the requested source change in web/src or web/public. Preserve existing content and responsive behavior. Commit the verified source change and push it to origin/codex/standalone-rebuild. Return the commit SHA and GitHub branch URL.

Do not build or deploy on IONOS. GitHub Actions performs the build and responsive QA because the shared server memory limit is too low for Astro/Vite. Do not touch the public staging folder unless Daniel explicitly starts a controlled deployment with a rollback.
```

## Source update commands

```sh
cd /homepages/31/d4299444035/htdocs/firstcontactthailand-standalone
git fetch origin
git checkout codex/standalone-rebuild
git pull --ff-only
git status
```

After a verified source edit:

```sh
git add <changed-files>
git commit -m "Describe the verified change"
git push origin codex/standalone-rebuild
```

Every push starts GitHub Actions. The workflow builds the standalone site, audits all routes, captures responsive pages, and publishes the staging package as a workflow artifact. Deployment to the public staging URL remains a separate atomic operation with a retained rollback directory.
