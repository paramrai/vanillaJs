const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    answer: "Madrid",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    answer: "Rome",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    answer: "Berlin",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: "300,000 km/s",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
    answer: "Tokyo",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "What is the chemical symbol for sodium?",
    options: ["Na", "K", "S", "Cl"],
    answer: "Na",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
    answer: "Sahara",
  },
  {
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
    answer: "Moscow",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
    answer: "Mount Everest",
  },
  {
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "Ir", "In", "I"],
    answer: "Fe",
  },
  {
    question: "What is the largest continent?",
    options: ["Africa", "Asia", "Europe", "Antarctica"],
    answer: "Asia",
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "What is the speed of sound?",
    options: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"],
    answer: "343 m/s",
  },
  {
    question: "What is the capital of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    answer: "Cairo",
  },
  {
    question: "What is the chemical symbol for carbon?",
    options: ["C", "Ca", "Cb", "Cd"],
    answer: "C",
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    answer: "Greenland",
  },
  {
    question: "What is the capital of Mexico?",
    options: ["Guadalajara", "Monterrey", "Tijuana", "Mexico City"],
    answer: "Mexico City",
  },
  {
    question: "What is the capital of Argentina?",
    options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    answer: "Buenos Aires",
  },
  {
    question: "What is the chemical symbol for potassium?",
    options: ["K", "P", "Pt", "Po"],
    answer: "K",
  },
  {
    question: "What is the largest lake in the world?",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron"],
    answer: "Caspian Sea",
  },
  {
    question: "What is the capital of South Africa?",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    answer: "Pretoria",
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
];

let questionNumber = 0;
let score = 0;
let randomQuiz = [];

while (randomQuiz.length !== 10) {
  let randomQuizIndex = Math.floor(Math.random() * quiz.length) + 1;
  randomQuiz.push(quiz[randomQuizIndex]);
}

const quizForm = document.querySelector("form");
const questionContainer = document.querySelector("form .questionContainer");
const optionContainer = document.querySelector("form .optionContainer");
const resultContainer = document.querySelector("#quiz #score");

function updateProgress() {
  const progress = document.querySelector(".progress");
  const progressPercentage = (questionNumber / randomQuiz.length) * 100;
  progress.style.width = `${progressPercentage}%`;
}

function loadQuestion() {
  if (questionNumber >= randomQuiz.length) {
    displayFinalScore();
    return;
  }

  updateProgress();

  questionContainer.textContent = randomQuiz[questionNumber].question;
  optionContainer.innerHTML = "";

  randomQuiz[questionNumber].options.forEach((option, index) => {
    let optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.innerHTML = `
          <input type="radio" name="option" id="${option}" value="${option}" />
          <label for="${option}">${option}</label>
        `;
    optionContainer.appendChild(optionDiv);
  });
}

function handleNext(e) {
  e.preventDefault();
  let selectedOption = document.querySelector(
    'input[name="option"]:checked'
  ).value;

  if (!selectedOption) {
    alert("Please select a value");
    return;
  }

  if (selectedOption === randomQuiz[questionNumber].answer) {
    score++;
    resultContainer.innerHTML = `Score: ${score}`;
  }

  questionNumber++;

  if (questionNumber < randomQuiz.length) {
    loadQuestion();
  } else {
    displayFinalScore();
  }
}

function displayFinalScore() {
  quizForm.innerHTML = `
    <h2 class="question">Quiz Complete! 🎉</h2>
    <p style="text-align: center; font-size: 1.2rem; margin: 20px 0;">
      Your final score is ${score} out of ${randomQuiz.length}
    </p>
    <button type="button" class="next" onclick="location.reload()">Try Again</button>
  `;
  updateProgress();
}

window.addEventListener("DOMContentLoaded", loadQuestion);
quizForm.addEventListener("submit", handleNext);
