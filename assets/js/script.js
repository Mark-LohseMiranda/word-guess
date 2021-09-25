var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["manatee", "word", "chicken"];

startButton.addEventListener("click", startGame);

function startGame() {
  timerCount = 10;
  startButton.disabled = true;
  renderBlanks();
  startCounter();
}

function renderBlanks() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  console.log(lettersInChosenWord);
  numBlanks = lettersInChosenWord.length
  blanksLetters = [];
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  wordBlank.textContent = blanksLetters.join(" ");
}

function startCounter() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        youWin();
      }
    }

    if (timerCount === 0) {
      clearInterval(timer);
      youLose();
    }
  }, 1000);
}

function youLose() {
  wordBlank.textContent = "GAME OVER";
  loseCounter++;
  startButton.disabled = false;
}

function youWin() {
  wordBlank.textContent = "YOU WON!!";
  winCounter++;
  startButton.disabled = false;
}
