// ============================================================
// SCAVENGER HUNT CONFIG
// ============================================================
//
// NOTE: hint text used to live in this file, but it's been moved to
// Code.gs (the Google Apps Script backend) so the public GitHub repo
// doesn't contain the clues. This file now only needs team names,
// the backend URL, and how many photos there are in total.
// To edit hints, teams, or point scaling, see Code.gs.

const CONFIG = {
  // Paste your Google Apps Script Web App URL here after deploying
  // (see README.md for setup steps). It should end in /exec
  API_URL: "https://script.google.com/macros/s/AKfycbzYlMPdWAoEzJKgys-CzR-QpZ6jM8G7u43sfQJbtFoFfdferW6iBWF8qPHzcmQkYyfggw/exec",

  // One entry per team. The link you hand out to each team is:
  //   index.html?team=Team%201        (spaces become %20)
  TEAMS: ["Couch Nappers", "Redbull Enjoyers", "Ping Pong Suckers", "Fatty Eaters", "Macaque Monsters", "Vibe Coders"],

  // Total number of photos hidden (ids are assumed to be 1..NUM_PHOTOS).
  // Must match the number of entries in the PHOTOS array in Code.gs.
  NUM_PHOTOS: 46
};
