let numberUserWins = 0;
let numberComputerWins = 0; 
let capitalize = word => {
    word = word.toLowerCase();
    word = word.substr(0, 1).toUpperCase() + word.substr(1)
    return word;
}

function computerPlay(){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = parseInt(Math.random()*3);
    return arr[randomNumber];
}

function playRound(playerSelection, computerSelection){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let playerValue = arr.indexOf(capitalize(playerSelection));
    let computerValue = arr.indexOf(capitalize(computerSelection));
    if(playerValue === (computerValue+1)%3){
        numberUserWins++;
        return 3; // win
    }else if ((playerValue+1)%3 === computerValue){
        numberComputerWins++;
        return 2; // lose
    }else{
        return 1; // draw
    }
}

function game(playerSelection){
    let computerSelection = computerPlay();
    const message = `Computer has selected ${computerSelection}`+'<br>';
    let result = playRound(playerSelection, computerSelection);
    const elmResult = document.querySelector('.result');
    const elmScore = document.querySelector('.score');
    elmScore.textContent = `Score: You=${numberUserWins}, Computer=${numberComputerWins}`;
    if (result === 3){
        elmResult.innerHTML = message + `You win this round! ${capitalize(playerSelection)} beats ${computerSelection}`;       
    }else if(result === 2){
        elmResult.innerHTML = message + `You lose this round! ${computerSelection} beats ${capitalize(playerSelection)}`
    }else{
        elmResult.innerHTML = message + 'DRAW';
    }

    if (numberUserWins === 5){
        elmScore.textContent='You got 5 points, you win';
        numberComputerWins = 0;
        numberUserWins = 0;
    }else if(numberComputerWins === 5){
        elmScore.textContent='Computer got 5 points, computer wins';
        numberComputerWins = 0;
        numberUserWins = 0;
    }

}