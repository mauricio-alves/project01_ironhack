class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.questions = [
      {
        question: "Em qual ano foi lançado o game?",
        answer: [1999, 2003, 2005, 1996, 2012],
        correctAnswer: 1999,
      },
      {
        question:
          "Quantas vezes o Brasil foi campeão mundial de Counter-Strike (CS)?",
        answer: [1, 2, 3, 4, 5],
        correctAnswer: 2,
      },
      {
        question:
          "Quantas vezes o jogador Marcelo 'coldzera' David foi eleito melhor jogador do mundo de CS?",
        answer: [1, 2, 3, 4, "nenhuma"],
        correctAnswer: 2,
      },
      {
        question:
          "Gabriel Toledo é um dos jogadores de maior destaque no cenário do game, qual o seu nick?",
        answer: ["taco", "coldzera", "fer", "fallen", "fnx"],
        correctAnswer: "fallen",
      },
      {
        question:
          "O CS já recebeu diversos mapas criados pela própria comunidade (mods). Um deles se passa no Brasil, qual seu nome?",
        answer: [
          "cs_osasco",
          "cs_cajazeiras",
          "cs_rio",
          "cs_brasilia",
          "cs_amazonia",
        ],
        correctAnswer: "cs_rio",
      },
    ];
  }

  showRules() {
    displayed.classList.toggle("hidden");
  }

  startGame() {
    startBtn.setAttribute("disabled", true);
    rulesBtn.setAttribute("disabled", true);
    userChances.classList.toggle("hidden");
    disabledBtn.innerText = "Go!";
  }

  showFirstQuestion() {
    question.classList.toggle("hidden");
    console.log(questionForm);

    for (let i = 0; i < questionForm.length; i++) {
      questionText.innerText = this.questions[0].question;
      questionInput[i].setAttribute("type", "radio");
      questionInput[i].setAttribute("id", this.questions[0].answer[i]);
      questionInput[i].setAttribute("name", this.questions[0].correctAnswer);
      questionInput[i].setAttribute("value", this.questions[0].answer[i]);
      questionLabel[i].innerText = this.questions[0].answer[i];
    }
  }

  // showSecondQuestion() {
  //   question.classList.toggle("hidden");

  //   for (let i = 0; i < questionForm.length; i++) {
  //     questionText.innerText = this.questions[1].question;
  //     questionInput[i].setAttribute("type", 'radio');
  //     questionInput[i].setAttribute("id", this.questions[1].answer[i]);
  //     questionInput[i].setAttribute("name", this.questions[1].correctAnswer);
  //     questionInput[i].setAttribute("value", this.questions[1].answer[i]);
  //     questionLabel[i].innerText = this.questions[1].answer[i];
  //   }
  // }

  validatingFirstQuestion() {
    // if (firstResponse === firstResponse.checked) {
    //   console.log("acertou!");
    // } else {
    //   console.log("errou!");
    // }
  }
}
