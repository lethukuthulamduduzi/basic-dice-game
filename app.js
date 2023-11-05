//Rolling the dice
let drawNumber = 1;
let drawResults = [];
const playerOneTable = document.querySelector('.player-1-table');
const playerTwoTable = document.querySelector('.player-2-table');
function diceRoll(player) {
    
    let oldNumber = null;
    let currentNumber = null;
    let newNumber;
    const playerOneButton = document.querySelector('.player-1');
    const playerTwoButton = document.querySelector('.player-2');
    

    do{
        newNumber = Math.floor(Math.random() * 6) + 1;
    }while(newNumber === oldNumber && newNumber === currentNumber)

    oldNumber = currentNumber;
    currentNumber = newNumber;

    const dice = faces.find((face) => face.faceNumber === newNumber);

    if(player === "one"){
        const playerOneFace = document.querySelector('.player-1-dice');      

        playerOneFace.src = dice.facePic;
        playerOneButton.disabled = true;
        playerTwoButton.disabled = false;
        playerOneTable.innerHTML += `
            <tr>
                <td>${drawNumber}</td>
                <td>${newNumber}</td>
            </tr>
        `;
        drawResults.push(newNumber);

    }else if(player == "two"){
        const playerTwoFace = document.querySelector('.player-2-dice');
        
        playerTwoFace.src = dice.facePic;
        playerOneButton.disabled = false;
        playerTwoButton.disabled = true;
        playerTwoTable.innerHTML += `
            <tr>
                <td>${drawNumber}</td>
                <td>${newNumber}</td>
            </tr>
        `;
        drawNumber++;
        drawResults.push(newNumber);
        findWinner(drawResults);
    }
    
}

//Finding the winner
function findWinner(result) {
    const winner = document.querySelector('.winner');
    if(result[0] > result[1]) {
        winner.innerHTML = "Player 1 Wins";
    }else if(result[0] < result[1]){
        winner.innerHTML = "Player 2 Wins";
    }else{
        winner.innerHTML = "It's a draw";
    }
    drawResults = [];
}


