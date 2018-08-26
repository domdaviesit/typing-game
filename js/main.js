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
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status (50ms Very fast!)
  setInterval(checkStatus, 50);
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrease time
    time--;
  } else if (time === 0) {
    // Game Over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    // score = -1;
  }
}
