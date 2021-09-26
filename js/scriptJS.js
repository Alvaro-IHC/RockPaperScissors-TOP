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
        return 3; // win
    }else if ((playerValue+1)%3 === computerValue){
        return 2; // lose
    }else{
        return 1; // draw
    }
}

function game(){
    let numberWin = 0;
    let numberLose = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissors?")
        let computerSelection = computerPlay();
        alert(`Computer has selected ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if (result === 3){
            alert(`You win this round! ${capitalize(playerSelection)} beats ${computerSelection}`);
            numberWin++;
        }else if(result === 2){
            alert(`You lose this round! ${computerSelection} beats ${capitalize(playerSelection)}`)
            numberLose++;
        }else{
            alert('DRAW');
        }
    }
    if (numberWin > numberLose)
        alert(`After 5 rounds, YOU WIN!`);
    else if (numberLose > numberWin)
        alert(`After 5 rounds, COMPUTER WINS!`);
    else
        alert('After 5 rounds, It\'s DRAW')
}