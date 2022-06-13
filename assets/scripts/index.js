const gameBoard = document.querySelector("#game-board");

const rulesBtn = document.querySelector("#rules");
const startBtn = document.querySelector("#start");
const entendiBtn = document.querySelector(".entendi-btn");
const disabledBtn = document.querySelector(".start-btn");

const displayed = document.querySelector(".rules-board");
const userChances = document.querySelector("#user-chances");

const firstQuestion = document.querySelector(".first-question");

const game = new Game(gameBoard);

rulesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.startGame();
  game.showFirstQuestion();
});

entendiBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});
