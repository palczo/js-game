let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");

function getComputerChoice() {
  const choices = ['kamień', 'papier', 'nożyce'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function convertToWord(letter) {
  if (letter === "k") return "kamień";
  if (letter === "p") return "papier";
  return "nożyce"
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} pobija ${convertToWord(computerChoice)}. Wygrywasz!`;
}

function lose() {
  console.log("PRZEGRAŁEŚ")
}

function draw() {
  console.log("REMIS")
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
  	case "kn":
  	case "pk":
  	case "np":
  	win(userChoice, computerChoice);
  	break;
  	case "kp":
  	case "pn":
  	case "nk":
  	lose(userChoice, computerChoice);
  	break;
  	case "kk":
  	case "pp":
  	case "nn":
  	draw(userChoice, computerChoice);
  }
}

function main() {
rock_div.addEventListener('click', function(){
  console.log("kamień!");
});

paper_div.addEventListener('click', function(){
  console.log("papier!!!");
});

scissors_div.addEventListener('click', function(){
  console.log("nożyce!!!!!11");
});
}
