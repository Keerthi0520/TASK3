const quizData = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which one is not a JS framework?",
    options: ["React", "Vue", "Angular", "Django"],
    answer: "Django"
  },
  {
    question: "Which tag is used for internal CSS?",
    options: ["link", "style", "script", "css"],
    answer: "style"
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${index + 1}. ${q.question}</strong></p>
      ${q.options.map(opt => `
        <label>
          <input type="radio" name="question${index}" value="${opt}">
          ${opt}
        </label><br>
      `).join('')}
    `;
    container.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="question${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("quiz-result").innerText = `You scored ${score} out of ${quizData.length}`;
}

async function fetchJoke() {
  const jokeElem = document.getElementById("joke");
  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await res.json();
    jokeElem.textContent = `${data.setup} - ${data.punchline}`;
  } catch (err) {
    jokeElem.textContent = "Failed to fetch a joke. Please try again later.";
  }
}

loadQuiz();
