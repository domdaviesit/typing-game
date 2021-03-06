// Game starts when window loads (fires off init function)
window.addEventListener("load", init);
// ---------------------------------------------------------
// GLOBAL VARIABLES
// ---------------------------------------------------------
// -------------------

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

// let so we can change, 5 for now. Then 4, 3, 2, 1, 0
// let time = 5; was hard coded to 5 - then couldn't change level's time
let time = currentLevel;
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

// ---------------------------------------------------------
// FUNCTIONS
// ---------------------------------------------------------
// -------------------
// Init Game
// -------------------

function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input.  listen for any input then start
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status (50ms Very fast!)
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    // alert("MATCH!!!!!"); TEST!!
    isPlaying = true;
    // 1 more second for page load
    // time = 6; was hardcoded to 6
    time = currentLevel + 1;
    showWord(words);
    // clear the input
    wordInput.value = "";
    // increment the score
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
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
    // Resets the score after losing. Just start typing again.
    // -1 so 1st word doesn't score
    score = -1;
  }
}
