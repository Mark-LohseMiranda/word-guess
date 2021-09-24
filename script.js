var clickStart = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var totalEl = document.querySelector("#total");
var wonEl = document.querySelector("#won");
var lostEl = document.querySelector("#lost");
var highEl = document.querySelector("#high");
var timeLeft = 80;
var gameOver = false;
var total = 0;
var won = 0;
var lost = 0;
var high = 0;
var randomWord = "";
var size = 0;

var words = ["fuck", "shit", "damn", "bitch"];

function setTime() {
  timeEl.textContent = time;
}

function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft < 1 || gameOver) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function scoreboard() {
  totalEl.textContent = `Total games played: ${total}`;
  wonEl.textContent = `Total games won: ${won}`;
  lostEl.textContent = `Total games lost: ${lost}`;
  highEl.textContent = `Fastest time: ${high}`;
}


function getRandomWord() {
    randomWord = words[Math.floor(Math.random() * 4)];
    console.log(randomWord);
    console.log(randomWord.length);
    size = randomWord.length;
}

function playingField() {
    for (let i = 0; i < randomWord.length; i++) {
        var letter = document.createElement("div");
        letter.setAttribute("class", "box transparent");
        letter.setAttribute("id", "letter" + i);
        letter.textContent = "X";
        document.querySelector(".word").append(letter);
    }
}

function resetPlayingField() {
    var elements = document.getElementsByClassName("box");
    while(elements.length >0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function playerKey(event) {
    
    var position = randomWord.indexOf(event.key);
    if (position != -1) {
        document.querySelector("#letter" + position).setAttribute("class", "box");
        document.querySelector("#letter" + position).textContent =
        randomWord[position];
        size--;
    }
    if (size === 0 && timeLeft > 0) {
        gameOver = true;
        resetPlayingField();

    }
}

function checkStatus() {
    if (size === 0 && timeLeft > 0) {
        alert("You won!");
    }
}


document.addEventListener("keyup", playerKey);

clickStart.addEventListener("click", function () {
  if (timeLeft === 80 || gameOver) {
      timeLeft === 80
      countdown();
      getRandomWord();
      playingField();
  }
});



