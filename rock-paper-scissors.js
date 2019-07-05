// Computer makes rock, paper, scissors choice
function computerPlay() {
  let randomNum = Math.floor(Math.random()*3);
  if (randomNum === 0) {
    return "paper";
  } else if  (randomNum === 1) {
    return "rock";
  } else {
    return "scissors";
  }
}

//Global score variables
let playerScore = 0;
let computerScore = 0;
let resultsDiv = document.querySelector('#results');
let scoreDiv = document.querySelector('#score');

// Compare player choice and computer choice, log result,
// increment scores appropriately
function rockPaperScissors(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    resultsDiv.textContent = 'You tied! Try again.'
    scoreDiv.textContent = `Computer score: ${computerScore}
                            Your score: ${playerScore}`
    return;
  }
  if (computerSelection === 'rock') {
    if (playerSelection === 'paper') {
      resultsDiv.textContent = 'You won this round! Paper beats rock.'
      playerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
                              Your score: ${playerScore}`
      return;
    }
    if (playerSelection === 'scissors') {
      resultsDiv.textContent = 'You lost this round! Rock beats scissors.'
      computerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
      Your score: ${playerScore}`
return;
    }
  }
  if (computerSelection === 'paper') {
    if (playerSelection === 'scissors') {
      resultsDiv.textContent = 'You won this round! Scissors beats paper.'
      playerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
      Your score: ${playerScore}`
return;
    }
    if (playerSelection === 'rock') {
      resultsDiv.textContent = 'You lost this round! Paper beats rock.'
      computerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
      Your score: ${playerScore}`
return;
    }
  }
  if (computerSelection === 'scissors') {
    if (playerSelection === 'rock') {
      resultsDiv.textContent = 'You won this round! Rock beats scissors.'
      playerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
      Your score: ${playerScore}`
return;
    }
    if (playerSelection === 'paper') {
      resultsDiv.textContent = 'You lost this round! Scissors beats paper.'
      computerScore += 1;
      scoreDiv.textContent = `Computer score: ${computerScore}
      Your score: ${playerScore}`
return;
    }
  }
}

// Play five rounds of rock, paper, scissors.
// At the end, return the winner of the game
// and reset the scores for the next game.
//	    function game() {
//		    for (i = 0; i < 5; i++) {
//			    let playerChoice = prompt("Rock, paper, or scissors?");
//          
//          rockPaperScissors(playerChoice, computerChoice);
//		    }
//        if (computerScore > playerScore) {
//          computerScore = 0;
//          playerScore = 0;
//          return 'The computer wins!'
//        } else if (playerScore > computerScore) {
//          computerScore = 0;
//          playerScore = 0;
//          return 'Congratulations, you beat the computer!'
//        } else if (playerScore === computerScore) {
//          computerScore = 0;
//          playerScore = 0;
//          return 'Wow, you guys tied all five rounds. What are the odds??'
//        }
//	    }

  let buttons = document.querySelector('#button-container');

  buttons.addEventListener('click', function(event) {
    let playerChoice = event.target.id;
    let computerChoice = computerPlay();
    console.log(computerChoice);
    rockPaperScissors(playerChoice, computerChoice)
    if (computerScore === 5) {
      scoreDiv.textContent = `Computer wins the game! Final Score:
      Computer score: ${computerScore}
      Your score: ${playerScore}`
      computerScore = 0;
      playerScore = 0;
    }
    if (playerScore === 5) {
      scoreDiv.textContent = `You win the game! Final Score: Computer score: ${computerScore}
      Your score: ${playerScore}`
      computerScore = 0;
      playerScore = 0;
    }
  });

