let current = 0;

const session = window.chapters.chapter1.sessions.session1;

function speak(){
  const word = document.getElementById("word").innerText;
  speechSynthesis.speak(new SpeechSynthesisUtterance(word));
}

function loadWord(){
  document.getElementById("word").innerText = session.word.term;
  document.getElementById("meaning").innerText = session.word.meaning;
}

function loadQuestion(){
  document.getElementById("question").innerText = session.quiz[current].question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  session.quiz[current].options.forEach(opt=>{
    const btn=document.createElement("button");
    btn.innerText=opt;
    btn.style.display="block";
    btn.style.margin="8px 0";
    optionsDiv.appendChild(btn);
  });

  loadWord();
}

function nextQuestion(){
  current++;
  if(current>=session.quiz.length){
    current=0;
  }
  loadQuestion();
}

loadQuestion();
document.getElementById("nextBtn").onclick = nextQuestion;
