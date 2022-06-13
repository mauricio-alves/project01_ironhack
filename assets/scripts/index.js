const gameBoard = document.querySelector("#game-board");

const rulesBtn = document.querySelector("#rules");
const startBtn = document.querySelector("#start");
const entendiBtn = document.querySelector(".entendi-btn");
const disabledBtn = document.querySelector(".start-btn");

const displayed = document.querySelector(".rules-board");
const userChances = document.querySelector("#user-chances");

const question = document.querySelector(".question-section");
const questionText = document.querySelector(".question");
const questionForm = document.querySelector(".options");
const questionInput = document.querySelectorAll(".options input");
const questionLabel = document.querySelectorAll(".options label");

const game = new Game(gameBoard);

rulesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.startGame();
  game.showFirstQuestion();
  // game.showSecondQuestion();
});

entendiBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

// question.addEventListener("click", (event) => {
//   event.preventDefault();
//   game.validatingFirstQuestion();
// });
