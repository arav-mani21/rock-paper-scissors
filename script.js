let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const values = ['rock','paper','scissors'];
    let num = Math.floor(Math.random() * values.length)
    return values[num];
}

function getHumanChoice(){
    return prompt('rock, paper, scissors, shoot!');
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log('Same input. Tie game!');
    }else if (humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            console.log('You win! Rock beats scissors!')
            humanScore++;
        }else{
            console.log('You lose! Paper beats rock!')
            computerScore++;
        }
    }else if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            console.log('You win! Paper beats rock!')
            humanScore++;
        }else{
            console.log('You lose! Scissor beats paper!')
            computerScore++;
        }
    }else{
        if (computerChoice == 'paper'){
            console.log('You win! Scissors beats paper!')
            humanScore++;
        }else{
            console.log('You lose! Rock beats scissors!')
            computerScore++;
        }
    }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore == computerScore){
        console.log('Tie game! No one wins');
    }else if(humanScore > computerScore){
        console.log('Human wins!');
    }else{
        console.log('Computer wins!');
    }

    console.log('Human round wins: ' + humanScore);
    console.log('Computer round wins: ' + computerScore);
}