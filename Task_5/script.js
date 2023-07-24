const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");

const w=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	 '0','1','2','3','4','5','6,','7','8','9'];
let randomWord;
let score = 0;
let time = 10;
let len;
let min=1;
let max=5;

const timeInterval = setInterval(updateTime, 1000);

function getRandomLength() {
  return Math.floor(Math.random() * max) + (min-1); 
}

function getRandomWord() {
  let res="";
  len= getRandomLength(min,max);
  for(let i=0;i<=len;i++)
  {
  	 res = res + w[Math.floor(Math.random() * w.length)];
  	
  }
  return res;
}


function addWordToDom() {
  randomWord = getRandomWord();
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function updateTime() {
  time--;
  timeElement.innerText = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameElement.innerHTML = `
    <h1>Time Out !!!</h1>
    <p>Score ${score}</p>
    <button onclick="history.go(0)">Try Again</button>
    `;
  endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    e.target.value = "";
    addWordToDom();
    updateScore();
    time += 5;
    updateTime();
  }
});

addWordToDom();
text.focus();
