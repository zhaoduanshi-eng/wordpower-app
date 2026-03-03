const session = window.sessionData;

const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

let currentQuestion = 0;

function loadContent() {
  wordEl.textContent = session.word.term;
  meaningEl.textContent = session.word.meaning;
  loadQuestion();
}

function loadQuestion() {
  const quiz = session.quiz[currentQuestion];
  questionEl.textContent = quiz.question;
  optionsEl.innerHTML = "";

  quiz.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correct = session.quiz[currentQuestion].answer;
  if (index === correct) {
    alert("正确！");
  } else {
    alert("错误！");
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= session.quiz.length) {
    alert("已经是最后一题");
    currentQuestion = 0;
  }
  loadQuestion();
}

function speak() {
  const utter = new SpeechSynthesisUtterance(session.word.term);
  speechSynthesis.speak(utter);
}

loadContent();
