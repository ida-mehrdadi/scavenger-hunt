// ============================================================
// SCAVENGER HUNT CONFIG — edit everything in this one file
// ============================================================

const CONFIG = {
  // Paste your Google Apps Script Web App URL here after deploying
  // (see README.md for setup steps). It should end in /exec
  API_URL: "https://script.google.com/macros/s/AKfycbzYlMPdWAoEzJKgys-CzR-QpZ6jM8G7u43sfQJbtFoFfdferW6iBWF8qPHzcmQkYyfggw/exec",

  // One entry per team. The link you hand out to each team is:
  //   index.html?team=Team%201        (spaces become %20)
  TEAMS: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"],

  // Section display names — rename however you like, keep 6 of them
  SECTIONS: [
    "The OGs",
    "New Faces",
    "Lab Legends",
    "Lecture Hall Regulars",
    "Coffee Break Crew",
    "Mystery Grads"
  ],

  // Every photo you hid. `section` is the index (0-5) into SECTIONS above.
  // `points` = how much it's worth. `hint` = the clue shown on the site.
  // Photo numbers here are what you should write on the back of each
  // printed photo, so people can type the number in once they find it.
  PHOTOS: [
    // ---- Section 0: The OGs ----
    { id: 1,  section: 0, points: 10, hint: "Hint for Photo #1: (write your clue here)" },
    { id: 2,  section: 0, points: 10, hint: "Hint for Photo #2: (write your clue here)" },
    { id: 3,  section: 0, points: 10, hint: "Hint for Photo #3: (write your clue here)" },
    { id: 4,  section: 0, points: 15, hint: "Hint for Photo #4: (write your clue here)" },
    { id: 5,  section: 0, points: 20, hint: "Hint for Photo #5: (write your clue here)" },

    // ---- Section 1: New Faces ----
    { id: 6,  section: 1, points: 10, hint: "Hint for Photo #6: (write your clue here)" },
    { id: 7,  section: 1, points: 10, hint: "Hint for Photo #7: (write your clue here)" },
    { id: 8,  section: 1, points: 10, hint: "Hint for Photo #8: (write your clue here)" },
    { id: 9,  section: 1, points: 15, hint: "Hint for Photo #9: (write your clue here)" },
    { id: 10, section: 1, points: 20, hint: "Hint for Photo #10: (write your clue here)" },

    // ---- Section 2: Lab Legends ----
    { id: 11, section: 2, points: 10, hint: "Hint for Photo #11: (write your clue here)" },
    { id: 12, section: 2, points: 10, hint: "Hint for Photo #12: (write your clue here)" },
    { id: 13, section: 2, points: 10, hint: "Hint for Photo #13: (write your clue here)" },
    { id: 14, section: 2, points: 15, hint: "Hint for Photo #14: (write your clue here)" },
    { id: 15, section: 2, points: 20, hint: "Hint for Photo #15: (write your clue here)" },

    // ---- Section 3: Lecture Hall Regulars ----
    { id: 16, section: 3, points: 10, hint: "Hint for Photo #16: (write your clue here)" },
    { id: 17, section: 3, points: 10, hint: "Hint for Photo #17: (write your clue here)" },
    { id: 18, section: 3, points: 10, hint: "Hint for Photo #18: (write your clue here)" },
    { id: 19, section: 3, points: 15, hint: "Hint for Photo #19: (write your clue here)" },
    { id: 20, section: 3, points: 20, hint: "Hint for Photo #20: (write your clue here)" },

    // ---- Section 4: Coffee Break Crew ----
    { id: 21, section: 4, points: 10, hint: "Hint for Photo #21: (write your clue here)" },
    { id: 22, section: 4, points: 10, hint: "Hint for Photo #22: (write your clue here)" },
    { id: 23, section: 4, points: 10, hint: "Hint for Photo #23: (write your clue here)" },
    { id: 24, section: 4, points: 15, hint: "Hint for Photo #24: (write your clue here)" },
    { id: 25, section: 4, points: 20, hint: "Hint for Photo #25: (write your clue here)" },

    // ---- Section 5: Mystery Grads ----
    { id: 26, section: 5, points: 10, hint: "Hint for Photo #26: (write your clue here)" },
    { id: 27, section: 5, points: 10, hint: "Hint for Photo #27: (write your clue here)" },
    { id: 28, section: 5, points: 10, hint: "Hint for Photo #28: (write your clue here)" },
    { id: 29, section: 5, points: 15, hint: "Hint for Photo #29: (write your clue here)" },
    { id: 30, section: 5, points: 20, hint: "Hint for Photo #30: (write your clue here)" }
  ]
};
