let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");

function getComputerChoice() {
    const choices = ['kamień', 'papier', 'nożyce'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
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
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} wygrywa z ${convertToWord(computerChoice)}${smallCompWord}. Wygrywasz!`;

}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} przegrywa z ${convertToWord(computerChoice)}${smallCompWord}. Przegrywasz!`;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} remisuje z ${convertToWord(computerChoice)}${smallCompWord}. Remis!`;
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


rock_div.addEventListener('click', function() {
    console.log("kliknąłeś na kamień");
})

paper_div.addEventListener('click', function() {
    console.log("kliknąłeś na papier");
});

scissors_div.addEventListener('click', function() {
    console.log("kliknąłeś na nożyce");
})