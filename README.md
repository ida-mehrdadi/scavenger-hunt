# Photo Scavenger Hunt

A photo scavenger hunt for masters students at the institute. Photos of everyone were hidden around the building — find them, log the number on the site, score points.

## Live links

Once GitHub Pages is enabled for this repo, replace `<username>` below with your GitHub username:

- **Hunt page (per team):** `https://<username>.github.io/scavenger-hunt/index.html?team=TEAM_NAME`
- **Live scoreboard:** `https://<username>.github.io/scavenger-hunt/scores.html`

If someone opens the hunt page with no `?team=` in the link, they get a picker to choose their team.

## Files

- `config.js` — all editable content: team names, section names, photo hints, and point values. This is the only file you'll usually need to touch.
- `index.html` — the page teams use to see hints and log found photos.
- `scores.html` — live-updating leaderboard, refreshes every 5 seconds.
- `Code.gs` — backend code for a Google Apps Script project that logs finds to a Google Sheet. Already deployed; only needed again if you redeploy the backend.

## How it works

Each team gets a randomized (but consistent) order of the 6 sections, so not everyone starts in the same place. Logging a found photo checks it against a Google Sheet backend so the same photo can't be double-counted, even across different teammates' phones.

## Editing content

Open `config.js` and update the `TEAMS`, `SECTIONS`, and `PHOTOS` arrays with real team names, section names, and hint text for each photo number. Number the printed/hidden photos to match the `id` values in `PHOTOS` so people know what to type in.

## Before the real event

Do a full dry run: open a link for a fake team, log a find, and confirm it shows up on `scores.html` and in the Google Sheet.
