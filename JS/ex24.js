var playerOne = document.getElementById("player-one");
var playerTwo = document.getElementById("player-two");
var resetButton = document.getElementById("reset");
var scoreboardPlayerOne = document.getElementsByTagName("span")[0];
var scoreboardPlayerTwo = document.getElementsByTagName("span")[1];
var scoreboardLimit = document.querySelector("p span");
var input = document.querySelector("input");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var scoreLimit = 5;

function reset () {
  playerOneScore = 0;
  playerTwoScore = 0;
  gameOver = false;
  scoreboardPlayerOne.classList.remove("winner");
  scoreboardPlayerTwo.classList.remove("winner");
  scoreboardPlayerOne.textContent = (playerOneScore);
  scoreboardPlayerTwo.textContent = (playerTwoScore);
}

playerOne.addEventListener("click", function () {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === scoreLimit){
      scoreboardPlayerOne.classList.add("winner");
      gameOver = true;
    }
    scoreboardPlayerOne.textContent = playerOneScore;
  }
});

playerTwo.addEventListener("click", function () {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === scoreLimit) {
      scoreboardPlayerTwo.classList.add("winner");
      gameOver = true;
    }
    scoreboardPlayerTwo.textContent = playerTwoScore;
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

input.addEventListener("change", function () {
  scoreboardLimit.textContent = this.value;
  scoreLimit = Number(this.value);
  reset();
})