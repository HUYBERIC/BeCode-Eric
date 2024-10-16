// V A R I A B L E S
const firstPoint = document.querySelector('.score-one')
const secondPoint = document.querySelector('.score-two')
const firstButton = document.querySelector('#player-one')
const secondButton = document.querySelector('#player-two')
const resetButton = document.querySelector('#reset');

// F O N C T I O N S _ S I M P L E S

function getScore (element) {
  return parseInt (element.innerText);
}

function randomColor(){
  let r = Math.floor(Math.random()*256)
  let g = Math.floor(Math.random()*256)
  let b = Math.floor(Math.random()*256)
  return `rgb(${r}, ${g}, ${b})`
}

// F O N C T I O N S

function gameCheckWinner(){
  const scoreOne = getScore(firstPoint);
  const scoreTwo = getScore(secondPoint);

  if (scoreOne >= 5 || scoreTwo >= 5){
    firstButton.disabled = true;
    secondButton.disabled = true;
    if(scoreOne > scoreTwo){
      firstPoint.style.color = "green";
      secondPoint.style.color = "red";
    } else if (scoreOne < scoreTwo){
      firstPoint.style.color = "red";
      secondPoint.style.color = "green";
    }
  }
}

function addPointPlayer1 () {
  let score = getScore(firstPoint);
  if (score < 5){
    score ++;
    firstPoint.innerText = score;
    firstPoint.style.color = randomColor();
    gameCheckWinner();
  }
}

function addPointPlayer2 () {
  let score = getScore(secondPoint);
  if (score < 5){
    score ++;
    secondPoint.innerText = score;
    secondPoint.style.color = randomColor();
    gameCheckWinner();
  }
}

function resetGame() {
  firstPoint.innerText = 0;
  secondPoint.innerText = 0;
  firstPoint.style.color = 'black';
  secondPoint.style.color = 'black';
  firstButton.disabled = false;
  secondButton.disabled = false;
}

// A D D  E V E N T  L I S T E N E R

firstButton.addEventListener("click", addPointPlayer1);
secondButton.addEventListener("click", addPointPlayer2);
resetButton.addEventListener("click", resetGame);