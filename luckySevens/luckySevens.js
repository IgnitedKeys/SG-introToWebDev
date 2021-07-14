 


function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
    
function play() {
    var bet = document.forms['bidForm']['bet'].value;
    var gameMoney = Number(document.forms['bidForm']['bet'].value);
    var rollNum = 0;
    var highestWin = 0;
    var highestRollNum;
    if (bet <= 0) {
        alert('Bid must be greater than zero');
        return false;
    }
    
    while(gameMoney > 0) {
        var dice01 = rollDice();
        var dice02 = rollDice();
        if (dice01 + dice02 == 7) {
            gameMoney += 4;
        } else {
            gameMoney -= 1;
        }
        rollNum += 1;
        if (gameMoney > highestWin) {
            highestWin = gameMoney;
            highestRollNum = rollNum;
        }
    }
    document.getElementById('results').style.display = 'block';
    document.getElementById('startBet').innerText = '$'+bet;
    document.getElementById('rolls').innerText = rollNum;
    document.getElementById('highest').innerText = '$'+highestWin;
    document.getElementById('rollCount').innerText = highestRollNum;
    return false;
    
}

