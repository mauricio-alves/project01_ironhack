class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }

  showRules() {
    displayed.classList.toggle("hidden");
  }

  startGame() {
    console.log("clicou2");
    startBtn.setAttribute("disabled", true);
    rulesBtn.setAttribute("disabled", true);
    userChances.classList.toggle("hidden");
    disabledBtn.innerText = "Go!";
  }

  showFirstQuestion() {
    firstQuestion.classList.toggle("hidden");
  }
}
