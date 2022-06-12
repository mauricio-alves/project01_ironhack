const rulesBtn = document.querySelector("#rules");
const startBtn = document.querySelector("#start");
const gameBoard = document.querySelector("#game-board");
const displayed = document.querySelector(".rules-board");
const entendiBtn = document.querySelector(".entendi-btn");
const disabledBtn = document.querySelector(".start-btn");

const game = new Game(gameBoard);

rulesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.startGame();
});

entendiBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});
