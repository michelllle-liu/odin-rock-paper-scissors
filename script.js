function computerPlay(){
    const moves = ["Rock", "Paper", "Scissors"]

    const random = Math.floor(Math.random() * moves.length);

    return (moves[random]);
}

console.log(computerPlay());

function playRound (playerSelection, computerSelection){
    switch (playerSelection.toUpperCase()){
        case "ROCK":
            if (computerSelection === "Rock"){
                return "Tie!";
            }
            else if (computerSelection === "Paper"){
                return "You lose! Paper beats Rock";
            }
            else{
                return "You win! Rock beats Scissors";
            }
        case "PAPER":
            if (computerSelection === "Rock"){
                return "You win! Paper beats Rock";
            }
            else if (computerSelection === "Paper"){
                return "Tie!";
            }
            else{
                return "You lose! Scissors beats Paper";
            }
        case "SCISSORS":
            if (computerSelection === "Rock"){
                return "You lose! Rock beats Scissors";
            }
            else if (computerSelection === "Paper"){
                return "You win! Scissors beats Paper";
            }
            else{
                return "Tie!";
            }
    }
}

function game(){
    
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));