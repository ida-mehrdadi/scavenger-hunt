# Photo Scavenger Hunt

A photo scavenger hunt for masters students at the institute. Photos of everyone were hidden around the building. Each team works through all 46 clues, one at a time, in their own randomized order.

## Live links

Once GitHub Pages is enabled for this repo, replace `<username>` below with your GitHub username:

- **Hunt page (per team):** `https://<username>.github.io/scavenger-hunt/index.html?team=TEAM_NAME`
- **Live scoreboard:** `https://<username>.github.io/scavenger-hunt/scores.html`

If someone opens the hunt page with no `?team=` in the link, they get a picker to choose their team.

## Files

- `config.js` — team names and all 46 photo hints. The file you'll usually touch.
- `index.html` — the page teams use: one clue at a time, answer dropdown, confirm popup.
- `scores.html` — live-updating leaderboard, refreshes every 5 seconds.
- `Code.gs` — backend code for a Google Apps Script project. Handles scoring and the shared Google Sheet log. Only needs re-pasting if you redeploy the backend.

## How it works

Each team sees all 46 clues, one at a time, in a randomized order that's consistent for that team (so nobody starts on the same clue). No photo numbers are shown next to a clue — teams have to actually find the matching photo, read the number off the back, and pick it from a dropdown (1–46). A confirm popup avoids accidental taps before it submits.

- **Correct answer:** locked in, removed from that team's remaining clues, points awarded.
- **Wrong answer:** clue stays put, they can try again.
- **Skip:** each team gets 3 skips total for the whole hunt. Skipping sends that clue to the back of their own queue, so it naturally comes back around once they've gone through everything else — no separate "final round" needed.

**Points are dynamic, not fixed.** The first time *any* team correctly answers a given photo, its point value gets locked in based on how much of the hunt's time had elapsed at that moment — found early, worth less; found late, worth more. Every other team who later answers that same photo gets that same locked-in value, so scoring reflects how hard a photo turned out to be for the group as a whole, not just when one specific team got to it. This is configured at the top of `Code.gs`:

```js
const HUNT_START = new Date('2026-07-25T14:00:00');   // hunt start date/time
const HUNT_DURATION_MINUTES = 90;                       // how long the hunt runs
const MIN_POINTS = 10;                                  // points for an early find
const MAX_POINTS = 30;                                  // points for a late find
```

**You must edit `HUNT_START` and `HUNT_DURATION_MINUTES` in `Code.gs` before the real event**, then redeploy (Deploy > Manage deployments > Edit > New version). If the hunt runs long or short, the scaling just clamps at MIN/MAX past either end — nothing breaks.

## Editing content

Open `config.js` and update `TEAMS` and the `hint` text in `PHOTOS`. Number your printed/hidden photos to match the `id` values so people know what to type in. All 46 hints are already written — tweak wording as needed, but no placeholders are left.

## Hint difficulty

The 46 hints are intentionally spread across a rough bell curve rather than all being the same difficulty:

- A handful are very easy (near-literal, e.g. flipping to a specific calendar month).
- Most sit in the middle — solvable with a bit of lateral thinking.
- A handful are genuinely hard (indirect wording, personality riddles instead of naming someone, relative-position clues instead of naming a location).

If you add or rewrite hints later, try to keep that spread rather than making everything uniformly easy or uniformly cryptic — it's part of what keeps the hunt interesting for 90 minutes.

## Before the real event

1. Update `HUNT_START` / `HUNT_DURATION_MINUTES` in `Code.gs` and redeploy.
2. Do a full dry run: open a link for a fake team, answer a clue correctly, confirm it shows up on `scores.html` and in the Google Sheet with a sensible point value.
3. Try a skip and a wrong answer too, just to see the flow.
