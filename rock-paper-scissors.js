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

// Compare player choice and computer choice, log result,
// increment scores appropriately
function rockPaperScissors(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log('You tied! Try again.');
    return;
  }
  if (computerSelection === 'rock') {
    if (playerSelection === 'paper') {
      console.log('You win! Paper beats rock.')
      return playerScore += 1;
    }
    if (playerSelection === 'scissors') {
      console.log('You lose! Rock beats scissors.')
      return computerScore += 1;
    }
  }
  if (computerSelection === 'paper') {
    if (playerSelection === 'scissors') {
      console.log('You win! Scissors beats paper.')
      return playerScore += 1;
    }
    if (playerSelection === 'rock') {
      console.log('You lose! Paper beats rock.')
      return computerScore += 1;
    }
  }
  if (computerSelection === 'scissors') {
    if (playerSelection === 'rock') {
      console.log('You win! Rock beats scissors.')
      return playerScore += 1;
    }
    if (playerSelection === 'paper') {
      console.log('You lose! Scissors beats rock.')
      return computerScore += 1;
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

  let playerChoice = '';
  let rockButton = document.getElementById('rock-btn');
  let paperButton = document.getElementById('paper-btn');
  let scissorsButton = document.getElementById('scissors-btn');

  let anyButton = document.querySelector('button');

  rockButton.addEventListener('click', function(event) {
    playerChoice = 'rock';
  });
  paperButton.addEventListener('click', function(event) {
    playerChoice = 'paper';
  });
  scissorsButton.addEventListener('click', function(event) {
    playerChoice = 'scissors';
  });
  let computerChoice = computerPlay();
  console.log(playerChoice);

  rockPaperScissors(playerChoice, computerChoice);

