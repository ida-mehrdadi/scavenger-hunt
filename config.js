// ============================================================
// SCAVENGER HUNT CONFIG — edit everything in this one file
// ============================================================

const CONFIG = {
  // Paste your Google Apps Script Web App URL here after deploying
  // (see README.md for setup steps). It should end in /exec
  API_URL: "https://script.google.com/macros/s/AKfycbzYlMPdWAoEzJKgys-CzR-QpZ6jM8G7u43sfQJbtFoFfdferW6iBWF8qPHzcmQkYyfggw/exec",

  // One entry per team. The link you hand out to each team is:
  //   index.html?team=Team%201        (spaces become %20)
  TEAMS: ["Couch Nappers", "Redbull Enjoyers", "Ping Pong Suckers", "Fatty Eaters", "Macaque Monsters", "Vibe Coders"],

  // Every photo you hid, with its rhyming hint. Photo numbers here are
  // what you should write on the back of each printed photo, so people
  // can pick the matching number once they find it.
  //
  // NOTE: there's no `points` field anymore — points are calculated
  // live by the backend based on how far into the hunt a photo gets
  // answered (early finds are worth less, late finds are worth more).
  // See HUNT_START / HUNT_DURATION_MINUTES / MIN_POINTS / MAX_POINTS
  // at the top of Code.gs to configure that.
  //
  // Every team gets all 46 clues, in a randomized order that's
  // consistent for that team (so nobody starts at the same clue).
  PHOTOS: [
    { id: 1,  hint: "So blue, so soft, where shadows creep, a hidden spot to rest and sleep." },
    { id: 2,  hint: "My twin's nearby, but not the same hue, seek low and soft, just not the blue." },
    { id: 3,  hint: "Pale as frost, beside the masters' door, a secret seam holds what you're looking for." },
    { id: 4,  hint: "Where grime goes to vanish and steam clouds rise, that's the chamber where I hide from prying eyes." },
    { id: 5,  hint: "Where the rubbish piles up high and wide, I'm waiting past the bin-lined side." },

    { id: 6,  hint: "Where flexing ends and snacks stay chilled, that's the spot where I'm stilled." },
    { id: 7,  hint: "In a founder's drawer, where sharing's the rule, communal treasures kept so cool." },
    { id: 8,  hint: "Where old pages go on their final ride, among the students' paper tide." },
    { id: 9,  hint: "Where the leaves steep slow and steam drifts free, a masters' drawer is home to me." },
    { id: 10, hint: "Flip to winter, don't be shy, give the monkey's rear a try." },

    { id: 11, hint: "Below your feet, yet over the wheels' domain — a hidden plane is where I remain." },
    { id: 12, hint: "A familiar orange graces the cover's face, flip to page one in the big room's space." },
    { id: 13, hint: "Where shells swim slow behind the glass, that's the home you must not pass." },
    { id: 14, hint: "Chatty as ever, with numbers his delight, a deck of magic cards rests nearby, out of sight." },
    { id: 15, hint: "Beneath the paddles' battlefield, that's exactly where I'm concealed." },

    { id: 16, hint: "Small slotted homes where papers rest, seek the post of the scholarly nest." },
    { id: 17, hint: "A tram's silhouette warns of tracks to heed, a metal sign is where I'm freed." },
    { id: 18, hint: "Behind the fuzzy little friend on show, a secret keeper down below." },
    { id: 19, hint: "Olé, olé, viva Jona through and through — lift what waves and I'll come into view." },
    { id: 20, hint: "Where plates are stacked in neat array, open the doors and I'll give way." },

    { id: 21, hint: "Where dinners heat up in a hurry, that's the spot, no need to worry." },
    { id: 22, hint: "Where frost collects, tucked out of sight, that's the icy spot, hidden from light." },
    { id: 23, hint: "Underneath the big room's wooden spread, that's the shadow where I'm led." },
    { id: 24, hint: "Where things get baked and warmed up top, that's exactly my hiding spot." },
    { id: 25, hint: "Above the desks where students plan and scheme, a hanging cage is where I gleam." },

    { id: 26, hint: "Big glasses, bright smiles, and Spanish in the air — that's the desk where I'm tucked, hidden with care." },
    { id: 27, hint: "Not long ago, an outsider stood and defended their case — that very room is now my secret space." },
    { id: 28, hint: "Girls just wanna have fun, and science too — behind their photo is where I stay hidden from view." },
    { id: 29, hint: "Where green letters point the way out, that's the spot without a doubt." },
    { id: 30, hint: "Black and white stones in a battle of wit, that's exactly the spot where I sit." },

    { id: 31, hint: "Among the parts that store their charge, that's the hideout, small not large." },
    { id: 32, hint: "What holds the weight of a chilly day's array, I cling close by, tucked out of the way." },
    { id: 33, hint: "Flowers that never wilt or die, behind their petals is where I lie." },
    { id: 34, hint: "Born where mint tea meets French delight, beneath his screen I rest, out of sight." },
    { id: 35, hint: "Where strings are strummed and chords ring true, behind the music, I wait for you." },

    { id: 36, hint: "Where pictures beam onto the wall, that's the box, not large at all." },
    { id: 37, hint: "Underneath the round room's table wide, that's exactly where I hide." },
    { id: 38, hint: "Inside the case where music sleeps tight, that's the spot, out of sight." },
    { id: 39, hint: "A tiny home, no bigger than a shoe, sits above his desk — the wildcard hides in there too." },
    { id: 40, hint: "One single strike wakes a sound so deep, a shining relic where echoes keep." },

    { id: 41, hint: "Curly and blonde, with a love for the birds, that's the desk where I hide without words." },
    { id: 42, hint: "Branches and roots, a history shown, that's the wall where I am grown." },
    { id: 43, hint: "A record kept of guests from beyond our walls, within its pages I rest until someone calls." },
    { id: 44, hint: "Outside, where smoke curls in the air, that's the corner, look right there." },
    { id: 45, hint: "Where fish swim slow behind the glass again, that's the tank, my second den." },

    { id: 46, hint: "Ooh ooh ah ah... Master." }
  ]
};
