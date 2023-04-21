var timeleft = 60;
var countdownTimer;
var currentQuestion = 0;

const questions = [
  {
    question: "If the condition in the 'If statement is false you should create a new variable with 'var'",
    choices: ["True", "False"],
    answer: "False"
  },
  {
    question: "To compare two values for equality without performing type coercion you would insert ___?",
    choices: ["!=", "<=", ">=", "==="], 
    answer: "==="
  },
  {
    question: "Console.log does what?",
    choices:["Shows you all the work you have done", "Outputs a message to the web console", "Allows you to make changing inside web browser"],
    answer:"Outputs a message to the web console"
  },
  {
    question:"When using a querySelector method what is used for ID",
    choices:["ID", "=", "#"],
    answer: "#"
  },
  {
    question: "when I need to declare a variable, what does so?",
    choices: ["Declare", "NewVariable", "Var"],
    answer: "var"
  },
  {
    question: "JavaScript is a __",
    choices: ["Styling language", "Markup language", "Programming language"],
    answer: "Programming language"
  },
  {
    question: "In JavaScript === compares values and types",
    choices: ["True", "False"],
    answer: "True"
  },
  {
    question: "To exit a loop in JavaScript, which statement is used?",
    choices: ["Return", "parentNode", "Break", "exit"],
    answer: "Break"
  },
  {
    question: "Character is not a data type in JavaScript.",
    choices: ["True", "False"],
    answer: "True"
  },
  {
    questions: "Which answer helps me pull an item from a document?",
    choices: ["document.createElement(file)", "document.getElementId(file)", "document.pullElementId(file)"],
    answer: "document.getElementID(file)"
  }
];

const quizContainer = document.getElementById("container");
const startButton = document.getElementById("start-btn");
const quizInstructions = document.getElementById("quiz-instructions");
const questionElement = document.getElementById("quiz-questions");
const answersElement = document.getElementById("quiz-answers");

// Inserted "Timer:" and seconds for my countdown timer of 60 seconds
startButton.addEventListener("click", function() {
  countdownTimer = setInterval(function() {
    if (timeleft > 0) {
      timeleft--;
// Needed to start a new conditional statement for when the timer gets to 1, instead of saying 1 seconds it'll read 1 second
      if (timeleft === 1) {
        document.getElementById("timer").textContent = "Timer: " + timeleft + " second";
      } else {
        document.getElementById("timer").textContent = "Timer: " + timeleft + " seconds";
      }
    } else {
      clearInterval(countdownTimer);
      alert("Quiz timer is up");
    }
  }, 1000);

  // Need to call startQuiz direct to eliminate the double clicking problem I was having
  startQuiz();
});


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
   // Instead of an alert message for correct or wrong answers I want something more subtle
   let message = document.createElement("answer");
    message.textContent = "Correct!";
    message.style.color = "green";
    message.style.fontWeight = "bold";
    message.style.marginTop = "5px";
    document.getElementById("answer-container").appendChild(message);
// this removes the correct message after half a second
    setTimeout(() => {
      message.parentNode.removeChild(message);
    }, 500);
  } else {
    let message = document.createElement("answer");
    message.textContent = "Incorrect!";
    message.style.color = "red";
    message.style.fontWeight = "bold";
    message.style.fontWeight = "5px";
    document.getElementById("answer-container").appendChild(message);
    timeleft -=5;
// this removes the incorrect message after half a second
    setTimeout(() => {
      message.parentNode.removeChild(message);
    }, 500);
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


 

