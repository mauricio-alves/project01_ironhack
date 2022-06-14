const gameBoard = document.querySelector("#game-board");

const rulesBtn = document.querySelector("#rules");
const startBtn = document.querySelector("#start");
const entendiBtn = document.querySelector(".entendi-btn");
const disabledBtn = document.querySelector(".start-btn");
const nextQuestionBtn = document.querySelector(".next-btn");

const displayed = document.querySelector(".rules-board");
const userChances = document.querySelector("#user-chances");

const question = document.querySelector(".question-section");
const questionText = document.querySelector(".question");
const questionForm = document.querySelector(".options");
const questionInput = document.querySelectorAll(".options input");
const questionLabel = document.querySelectorAll(".options label");

const game = new Game(gameBoard);

let count = 0;
let i = 0;

rulesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.startGame();
  game.showQuestion(count);
});

entendiBtn.addEventListener("click", (event) => {
  event.preventDefault();
  game.showRules();
});

question.addEventListener("click", (event) => {
  game.validateQuestion(event.path[i].value);
  console.log(event.path);
});

nextQuestionBtn.addEventListener("click", (event) => {
  event.preventDefault();
  count++;
  game.showQuestion(count);
  i++;
});
