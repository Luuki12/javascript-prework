function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } 
<<<<<<< HEAD

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


// Computer moves
=======
  }

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Ja wygrywam!';
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Ja wygrywam!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Ja wygrywam!';
    } else {
        return 'Remis!';
    }
}
>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

<<<<<<< HEAD
printMessage('Mój ruch to: ' + computerMove);



=======
>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d
/*
if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2) {
    computerMove = 'papier';
} else if(randomNumber == 3) {
    computerMove = 'nożyce';
} 
*/

<<<<<<< HEAD

=======
printMessage('Mój ruch to: ' + computerMove);
*/
>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d

//Player move

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

<<<<<<< HEAD
let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);



=======
let playerMove = getMoveName(randomNumber);
>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d
/*
if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
} 
*/


// Game result 

 let argComputerMove = computerMove;
 let argPlayerMove = playerMove;

 console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ja wygrywam!');
    } else {
        printMessage('Remis!');
    }
}
displayResult(argComputerMove,argPlayerMove);

<<<<<<< HEAD
=======
printMessage('Twój ruch to: ' + playerMove);
*/

>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d
/*
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam!');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam!');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam!');
} else {
    printMessage('Remis!');
}
*/
<<<<<<< HEAD


=======
>>>>>>> 8c52f89941054c97c076b35e4b19c494ff26346d


