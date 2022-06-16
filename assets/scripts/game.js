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
    begin.play();
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
    let p = answer;
    let index = count;
    let vida = Number(playerHealth.innerText);

    if (event == this.questions[index].correctAnswer) {
      console.log(event, "acertou!");
      correctAnswer.classList.toggle("hidden");
    } else {
      console.log(event, "errou!");
      vida = vida - 2;
      let newVida = vida.toString();
      playerHealth.innerText = newVida;
      wrongAnswer.classList.toggle("hidden");
      p.innerText = `Errado! A resposta correta é ${this.questions[index].correctAnswer}!`;
    }

    if (index == 4 && playerHealth.innerText > 0) {
      question.classList.toggle("hidden");
      winnerBtn.classList.toggle("hidden");
      correctAnswer.classList.toggle("hidden");
      win.play();
      gameScreen.classList.remove('inicio');
      gameScreen.classList.add('venceu');
    }

    if (playerHealth.innerText == 0) {
      gameOverBtn.classList.toggle("hidden");
      question.classList.toggle("hidden");
      wrongAnswer.classList.toggle("hidden");
      gameScreen.classList.remove('inicio');
      gameScreen.classList.add('perdeu');

      lose.play();
    }
  }

  clearRadioInput() {
    for (let i = 0; i < questionInput.length; i++) {
      questionInput[i].checked = false;
    }
  }
}
