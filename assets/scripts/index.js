const theme = document.querySelector(".audio-theme");
const bodyPage = document.querySelector("html");
bodyPage.addEventListener("click", () => {
  theme.play();
});
theme.play();

const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const begin = document.querySelector(".begin");

const gameBoard = document.querySelector("#game-board");

const rulesBtn = document.querySelector("#rules");
const startBtn = document.querySelector("#start");
const entendiBtn = document.querySelector(".entendi-btn");
const disabledBtn = document.querySelector(".start-btn");
const nextQuestionBtn = document.querySelector(".next-btn");

const displayed = document.querySelector(".rules-board");
const userChances = document.querySelector("#user-chances");

const gameScreen = document.querySelector(".inicio");
const question = document.querySelector(".question-section");
const questionText = document.querySelector(".question");
const questionForm = document.querySelector(".options");
const questionInput = document.querySelectorAll(".options input");
const questionLabel = document.querySelectorAll(".options label");

const correctAnswer = document.querySelector(".correct");
const wrongAnswer = document.querySelector(".wrong");
const gameOverBtn = document.querySelector(".game-over");
const winnerBtn = document.querySelector(".winner");

const game = new Game(gameBoard);

let playerHealth = document.querySelector("#life span");
let answer = document.querySelector(".answer");
let count = 0;

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

questionForm.addEventListener("click", (event) => {
  game.validateQuestion(event.path[0].value);
});

nextQuestionBtn.addEventListener("click", (event) => {
  event.preventDefault();
  count++;
  game.showQuestion(count);
  game.clearRadioInput();
});

gameOverBtn.addEventListener("click", () => {
  window.location.reload(true);
});

winnerBtn.addEventListener("click", () => {
  window.location.reload(true);
});

correctAnswer.addEventListener("click", (event) => {
  correctAnswer.classList.toggle("hidden");
});

wrongAnswer.addEventListener("click", (event) => {
  wrongAnswer.classList.toggle("hidden");
});
