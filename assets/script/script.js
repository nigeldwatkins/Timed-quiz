var timeleft = 60;
var countdownTimer;
var currentQuestion = 0;

const questions = [
  {
    question: "If the condition in the 'If statement is false you should create a new variable with 'var'",
    choices: ["True", "False"],
    answer: "False"
  },
];

document.getElementById("start-btn").addEventListener("click", function() {
  countdownTimer = setInterval(function() {
    
    if (timeleft > 0) {
      timeleft--;
      document.getElementById("timer").innerHTML = timeleft; 
    } else {
      clearInterval(countdownTimer);
      alert("Quiz timer up!");
    }
  }, 1000);

  const quizContainer = document.getElementById("container");
  const startButton = document.getElementById("start-btn");
  const quizInstructions = document.getElementById("quiz-instructions");
  const questionElement = document.getElementById("quiz-questions");
  const answersElement = document.getElementById("quiz-answers");

  startButton.addEventListener("click", startQuiz);

  function startQuiz() {
    startButton.style.display = "none";
  // Removing paragraph
    quizInstructions.style.display= "none"; 
    displayQuestion();
  }

  function displayQuestion() {
    const questionObj = questions[currentQuestion];
    questionElement.textContent = questionObj.question;
    answersElement.innerHTML = "";

    questionObj.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => {
        checkAnswer(choice, questionObj.answer);
      });
      answersElement.appendChild(button);
    });
  }

  function checkAnswer(choice, answer) {
    if (choice === answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
      timeleft -=5;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    clearInterval(countdownTimer);
    alert("Quiz is over!");
  }
});


 

