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
    const roundResult = document.querySelector('#result')
    let result = ''

    if (humanChoice == computerChoice){
        result = 'Same input. Tie game!';
    }else if (humanChoice == 'rock'){
        if (computerChoice == 'scissors'){
            result = 'You win! Rock beats scissors!'
            humanScore++;
        }else{
            result = 'You lose! Paper beats rock!'
            computerScore++;
        }
    }else if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            result = 'You win! Paper beats rock!'
            humanScore++;
        }else{
            result = 'You lose! Scissor beats paper!'
            computerScore++;
        }
    }else{
        if (computerChoice == 'paper'){
            result = 'You win! Scissors beats paper!'
            humanScore++;
        }else{
            result = 'You lose! Rock beats scissors!'
            computerScore++;
        }
    }

    roundResult.innerHTML += "<br>Human Score: " + humanScore + 
        "<br>Computer Score: " + computerScore +
        "<br>" + result
}

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const computerChoice = getComputerChoice()
        document.querySelector('#result').innerHTML = 
            "Computer Choice: " + computerChoice +
            "<br>Human Choice: " + button.id
        playRound(button.id,computerChoice)
    })
})