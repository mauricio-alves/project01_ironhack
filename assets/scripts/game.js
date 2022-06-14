class Game {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.questions = [
      {
        question: "Em qual ano foi lançado o game?",
        answers: [1999, 2003, 2005, 1996, 2012],
        correctAnswer: 1999,
      },
      {
        question:
          "Quantas vezes o Brasil foi campeão mundial de Counter-Strike (CS)?",
        answers: [1, 2, 3, 4, 5],
        correctAnswer: 2,
      },
      {
        question:
          "Quantas vezes Marcelo 'coldzera' David foi eleito melhor jogador de CS?",
        answers: [1, 2, 3, 4, "nenhuma"],
        correctAnswer: 2,
      },
      {
        question:
          "Qual o nick do jogador, conhecido como 'professor',  Gabriel Toledo?",
        answers: ["taco", "coldzera", "fer", "fallen", "fnx"],
        correctAnswer: "fallen",
      },
      {
        question:
          "Qual o nome do mapa, criado pela própria comunidade, que se passa no Brasil?",
        answers: [
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
    question.classList.toggle("hidden");
    userChances.classList.toggle("hidden");
    disabledBtn.innerText = "Go!";
  }

  showQuestion(count) {
    let questNumber = count;

    for (let i = 0; i < questionForm.length; i++) {
      questionText.innerText = this.questions[questNumber].question;
      questionInput[i].setAttribute("type", "radio");
      questionInput[i].setAttribute(
        "id",
        "a" + this.questions[questNumber].answers[i]
      );
      questionInput[i].setAttribute(
        "name",
        this.questions[questNumber].correctAnswer
      );
      questionInput[i].setAttribute(
        "value",
        this.questions[questNumber].answers[i]
      );
      questionLabel[i].innerText = this.questions[questNumber].answers[i];
    }
  }

  validateQuestion(event) {
    let index = i;
    console.log(index);
    console.log(this.questions[index].correctAnswer);
    if (event == this.questions[index].correctAnswer) {
      console.log(event, "acertou!");
    } else {
      console.log(event, "errou!");
    }
  }

  // round() {
  //   showQuestion(count);
  // }
}
