console.log("Welcome, please make a choice!");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    const randChoice = Math.floor(Math.random() * choices.length);

    const computerSelection = choices[randChoice];

    return computerSelection;
}

const computerSelection = getComputerChoice();

var playerSelection = prompt("Make your choice.").toLowerCase();




console.log(playerSelection);


function playGame(playerSelection, computerSelection){
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(playerSelection + " beats " + computerSelection + ". YOU WIN!")
      } else if (playerSelection === "rock" && computerSelection === "paper") {        console.log(computerSelection + " beats " + playerSelection + ". YOU LOSE!")
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(playerSelection + " beats " + computerSelection + ". YOU WIN!")
      } else if (playerSelection === "scissors" && computerSelection === "rock") {  
        console.log(computerSelection + " beats " + playerSelection + ". YOU LOSE!")
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(playerSelection + " beats " + computerSelection + ". YOU WIN!")
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(computerSelection + " beats " + playerSelection + ". YOU LOSE!")
      } else if (playerSelection === computerSelection) {
        console.log("You both chose " + playerSelection + ". That's a draw.")
      }
    // console.log(playerSelection + " "+ computerSelection);
    return playGame;
}




playGame(playerSelection, computerSelection);
