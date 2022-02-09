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
                return "Oh no! Paper beats Rock";
            }
            else{
                return "Nice! Rock beats Scissors";
            }
        case "PAPER":
            if (computerSelection === "Rock"){
                return "Nice! Paper beats Rock";
            }
            else if (computerSelection === "Paper"){
                return "Tie!";
            }
            else{
                return "Oh no! Scissors beats Paper";
            }
        case "SCISSORS":
            if (computerSelection === "Rock"){
                return "Oh no! Rock beats Scissors";
            }
            else if (computerSelection === "Paper"){
                return "Nice! Scissors beats Paper";
            }
            else{
                return "Tie!";
            }
        default:
            return "Invalid selection!";
    }
}

function game(){
    playerScore = 0;
    computerScore = 0;

    for (round = 1; round <= 5; round++){
        console.log("Round " + round);
        playerSelection = prompt("Rock, paper, or scissors?");

        roundResult = playRound(playerSelection, computerPlay());
        console.log(roundResult);

        if (roundResult.includes("Nice!")){
            playerScore++;
        }
        else if (roundResult.includes("Oh no!")){
            computerScore++;
        }

        console.log("Your score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if (playerScore > computerScore){
        console.log("Congratulations, you win!");
    }
    else if (computerScore > playerScore){
        console.log("You lose! Better luck next time!");
    }
    else{
        console.log("It's a tie!");
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

game();