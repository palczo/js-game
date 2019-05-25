let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("kamień");
const paper_div = document.getElementById("papier");
const scissors_div = document.getElementById("nożyce");

function getComputerChoice() {
  const choices = ['kamień', 'papier', 'nożyce'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices [randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + " pobija " + computerChoice + ". Wygrywasz!";
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
  	case "kamień nożyce":
  	case "papier kamień":
  	case "nożyce papier":
  	win(userChoice, computerChoice);
  	break;
  	case "kamień papier":
  	case "papier nożyce":
  	case "nożyce kamień":
  	lose(userChoice, computerChoice);
  	break;
  	case "kamień kamień":
  	case "papier papier":
  	case "nożyce nożyce":
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
