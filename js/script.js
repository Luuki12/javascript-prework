let computerResult = 0;
let playerResult = 0;
let resultDOM = document.getElementById('result');

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
}

function getMoveName(argMoveId) {
    if (argMoveId === 1) {
        return 'kamień';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'nożyce';
    } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
        score('player');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
        score('player');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
        score('player');
    } else if (argComputerMove === 'kamień' && argPlayerMove === 'nożyce') {
        printMessage('Ja wygrywam!');
        score('computer');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'kamień') {
        printMessage('Ja wygrywam!');
        score('computer');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'papier') {
        printMessage('Ja wygrywam!');
        score('computer');
    } else {
        printMessage('Remis!');
        score('remis');
    }
}

function score(winner) {
    if (winner === 'computer') {
        computerResult++;
    } else if (winner === 'player') {
        playerResult++;
    }
    resultDOM.innerHTML = `Computer: ${computerResult} - Player: ${playerResult}`;
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});
