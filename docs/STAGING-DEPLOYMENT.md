# IONOS Staging Deployment

The standalone Astro site is reviewed at:

- `https://firstcontactthailand.com/staging/`

The staging directory is isolated from the live WordPress document root. Production must not be changed during staging updates.

## Build

From `web/`:

```sh
npm ci
npm run build:staging
```

The deployable output is `web/dist-staging/`.

## Controlled Server Update

1. Upload the complete package to a new sibling directory such as `staging-next-YYYYMMDD-HHMMSS`.
2. Confirm the uploaded file count and total byte count.
3. Rename the current `staging` directory to `staging-rollback-YYYYMMDD-HHMMSS`.
4. Rename the uploaded directory to `staging`.
5. Run the complete route and responsive QA against the public staging URL.
6. Keep the rollback directory until Mat has approved the new staging version.

Credentials are never stored in this repository. The server host, account and secret remain in the approved local credential store.

## Rollback

If public staging validation fails, rename the failed `staging` directory out of the way and restore the most recent `staging-rollback-*` directory to `staging`.

## Production Cutover

Production deployment is a separate operation. It requires Mat's approval, a fresh production backup, an agreed maintenance window and a tested rollback. Staging approval does not authorize replacing the live site.
