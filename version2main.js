const computerChoice = document.getElementById('comp-choice')
const playerChoice = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let compChoice
let result
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice //userChoice is the button input, "converting" to html
    generateCompChoice()
    generateResult()
}))

function generateCompChoice () {
    let random = Math.floor(Math.random() * 3);  // 3 is same as possibleChoices.length
    console.log(random);
    if (random === 0) {
        compChoice = "rock"
    } if (random === 1) {
        compChoice = "paper"
    } if (random === 2) {
        compChoice = "scissors"
    }
    computerChoice.innerHTML = compChoice
}
// had this as a switch statement and it didnt work 

function generateResult() {
    if (
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ) {
            result = "won"}
    if (
        (userChoice === 'paper' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'rock') ||
        (userChoice === 'rock' && compChoice ==='paper') ) {
            result = "lose"}
    if (userChoice === compChoice) {
            result = "tied with the machine"}
    
    resultDisplay.innerHTML = result
}