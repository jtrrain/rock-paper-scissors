function playMatch(result) {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playRound();
            if (result === "YOU WIN" ) {
                playerScore = playerScore + 1 
            } else if (result === "YOU LOSE") {
                computerScore = computerScore + 1
            } else {
                i = i - 1
            }
        console.log(i)
        console.log("You: " + playerScore)
        console.log("The Machine: " + computerScore)
}}
// this function doesn't work

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const result = gameResult(playerSelection, computerSelection);
    console.log("you picked " + playerSelection)
    console.log("the computer choose " + computerSelection)
    console.log(result)
}

function playerChoice() {
    let userInput = prompt("rock.. Paper.. SCISSORS...", "");
    userInput = userInput.toLowerCase();
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
            return userInput
        } else {
            console.log("Error: pick ROCK, PAPER, or SCISSORS... you dumb idiot wtf")
        }
    }

function computerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
// could also do const choices = ["rock", "paper", "scissors"]; /n return choices ... choices.length instead of 3

function gameResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "TIE";}
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock"))
            {return "YOU WIN";}
    else {
        return "YOU LOSE";}
    }

playRound();