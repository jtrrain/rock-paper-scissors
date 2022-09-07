function playMatch(result) {
    let playerScore = 0
    let computerScore = 0
    console.log("...best 3 out of 5 wins...")
    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = playerChoice();
        const computerSelection = computerChoice();
        console.log("you picked " + playerSelection)
        console.log("the computer choose " + computerSelection)
        if (playerSelection === computerSelection) {
            console.log("tie")
            console.log("You: " + playerScore)
            console.log("The Machine: " + computerScore)
        } else if ( (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore++
            console.log("win")
            console.log("You: " + playerScore)
            console.log("The Machine: " + computerScore)
        } else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "rock" && computerSelection === "paper")) {
            computerScore++
            console.log("lose")
            console.log("You: " + playerScore)
            console.log("The Machine: " + computerScore)
        } else {
            console.log("error")
            }
        console.log("...")
}}

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

// playMatch();
// playRound();