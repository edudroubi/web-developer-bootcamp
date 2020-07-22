var playerOne = document.getElementById("player-one");
var playerTwo = document.getElementById("player-two");
var reset = document.getElementById("reset");
var scoreboardPlayerOne = document.getElementsByTagName("span")[0];
var scoreboardPlayerTwo = document.getElementsByTagName("span")[1];
var scoreboardLimit = document.querySelector("p span");
var input = document.querySelector("input");
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var scoreLimit = 5;


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

reset.addEventListener("click", function () {
  playerOneScore = 0;
  playerTwoScore = 0;
  gameOver = false;
  scoreboardPlayerOne.classList.remove("winner");
  scoreboardPlayerTwo.classList.remove("winner");
  scoreboardPlayerOne.textContent = (playerOneScore);
  scoreboardPlayerTwo.textContent = (playerTwoScore);
});

input.addEventListener("change", function () {
  scoreboardLimit.textContent = input.value
  scoreLimit = Number(input.value)
})