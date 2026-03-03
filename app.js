let current = 0;

function speak(){
  const word = document.getElementById("word").innerText;
  speechSynthesis.speak(new SpeechSynthesisUtterance(word));
}

function loadWord(){
  document.getElementById("word").innerText = quiz[current].word;
  document.getElementById("meaning").innerText = quiz[current].meaning;
}

function loadQuestion(){
  document.getElementById("question").innerText = quiz[current].q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz[current].options.forEach(opt=>{
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
  if(current>=quiz.length){
    current=0;
  }
  loadQuestion();
}

loadQuestion();
