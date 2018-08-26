// Game starts when window loads (fires off init function)
window.addEventListener("load", init);
// ---------------------------------------------------------
// GLOBAL VARIABLES
// ---------------------------------------------------------
// -------------------

// let so we can change, 5 for now. Then 4, 3, 2, 1, 0
let time = 5;
let score = 0;
let isPlaying; // just initializing

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// ---------------------------------------------------------
// Hard coded Array of words, 30 for now
// ---------------------------------------------------------
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "wales",
  "dragon"
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  // seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}
