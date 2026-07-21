# First Contact Thailand source-to-Astro gap matrix

Audit date: 2026-07-20 (Asia/Bangkok)

The live public site is the visual/content reference. Mat's recovered July 7-15 history is used to retain later requirements that were not published, notably local charity summary pages and region-specific event archives.

## Events

| Route | Live reference | Astro gap | Required correction |
|---|---|---|---|
| `/community-events/` | Seven current Samui cards, including Free Beach Fitness and Full Moon Party VIP Trip | Five cards | Restore all seven cards, current images, wording and enquiry routes |
| `/bangkok-community-events/` | Club 30 Bangkok and Monster Music Festival | Includes stale Bangkok Titans | Remove stale card and use live images/content |
| `/chiang-mai-community-events/` | Empty-state calendar card | Generic empty state | Match current page wording/image |
| `/hua-hin-community-events/` | Rotary Royal Hua Hin Charity Golf Classic only | Includes stale Summer of Love | Remove stale card and use live card |
| `/koh-phangan-community-events/` | Empty community calendar | Generic empty state | Match current page wording |
| `/krabi-community-events/` | Krabi Hospital Run, Ngorn Nak Trail, BYAS at Bamboo Beach Club | Four stale/different cards | Replace with the three current cards and images |
| `/pattaya-community-events/` | Pattaya Pride and Tomorrowland Pattaya | Four cards including two past events | Keep two current cards; move Golf and Circuit to Pattaya archive |
| `/phuket-community-events/` | Rafael Cerato, Ministry of Sound, Vegetarian Festival, Snowbirds | Six cards including two expired June events | Keep four current cards and exact images |
| `/past-events/` | Area-specific archive selected by area | Always renders Samui | Create stable regional archive routes and map each current page to its own archive |

## Charity

All six region pages retain local summary routes. Every summary must identify the relevant Rotary organisation/source rather than claim First Contact authored the project information.

| Region | Programs | Astro gap |
|---|---:|---|
| Bangkok | 5 | Generic images and shortened introduction |
| Chiang Mai | 10 | Images are present but source attribution is missing |
| Hua Hin | 10 | Generic/unrelated images |
| Koh Samui | 6 | Generic/unrelated images |
| Pattaya | 7 | First two images are generic and source attribution is missing |
| Phuket | 5 | All images are unrelated placeholders |

Required correction: download the exact public program images into local assets, preserve local summary pages, store each Rotary source URL/name, and add a clear official-source link from the summary.

## Property Sales

| Surface | Live reference | Astro gap | Required correction |
|---|---|---|---|
| Main navigation | `Property > Property Sales > 8 areas` | One-level Property menu with no area submenu | Add nested Sales submenu on desktop and mobile |
| `/property-sales/` | Eight area cards | Six cards | Add Chiang Mai and Hua Hin and match live copy/routes |
| Area routes | Search/filter controls plus real listing cards | Generic support page only | Restore real catalogue UI and data |
| Koh Samui data | Supabase property feed | Missing | Commit a current snapshot and retain a repeatable sync path |
| Koh Phangan, Bangkok, Pattaya, Phuket, Chiang Mai, Hua Hin | RE/MAX search feed | Missing | Commit current area snapshots and retain a repeatable sync path |
| Krabi | Curated current listing set | Missing | Recreate the curated listing cards |

The rebuilt pages must not call WordPress. External listing feeds/CDN images are data sources, not WordPress dependencies.
