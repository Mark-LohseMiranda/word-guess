var clickStart = document.querySelector("#start");
var clickReset = document.querySelector("#reset");
var timeEl = document.querySelector("#time");
var totalEl = document.querySelector("#total");
var wonEl = document.querySelector("#won");
var lostEl = document.querySelector("#lost");
var highEl = document.querySelector("#high");
var timeLeft;
const gameTimer = 80;
var gameOver = false;
var total = 0;
var won = 0;
var lost = 0;
var high = 0;
var randomWord = "";
var size = 0;
var timeInterval

var words = ["afucak", "ashiat", "adaman", "abitach", "aardvark"];

function setTime() {
  timeEl.textContent = time;
}

function countdown() {
  timeLeft = gameTimer;
  timeInterval = setInterval(function () {
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
    randomWord = words[Math.floor(Math.random() * 5)];
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
    timeLeft = gameTimer;
    var elements = document.getElementsByClassName("box");
    while(elements.length >0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    gameOver = false;
}


function playerKey(event) {
  
  for (let i = 0; i < randomWord.length; i++) {
    if (event.key === randomWord[i]) {
      document.querySelector("#letter" + i).setAttribute("class", "box");
        document.querySelector("#letter" + i).textContent =
        randomWord[i];
        size--;
    }
    
  }  

}

function checkStatus() {
    if (size === 0 && timeLeft > 0) {
        alert("You won!");
        gameOver = true;
    }
}


clickReset.addEventListener("click", function () {
  gameOver = false;
  clickStart.disabled = false;
  clearInterval(timeInterval);
  timeEl.textContent = gameTimer;
  resetPlayingField();
});

document.addEventListener("keydown", playerKey);

clickStart.addEventListener("click", function () {
      clickStart.disabled = true;
      resetPlayingField();
      countdown();
      getRandomWord();
      playingField();
  }
);



