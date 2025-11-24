let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    draw: 0
};

updateScore();

function comp_Choise() {
    let compChoise;
    let randomNumer = Math.random();

    if (randomNumer <= (1/3)) {
        compChoise = 'rock';
    }else if (randomNumer <= (2/3)) {
        compChoise = 'paper';
    }else{
        compChoise = 'scissors';
    }
    return compChoise;
}

function playGame(playerChoise) {
    let compChoise = comp_Choise();
    let result;

    if(playerChoise === 'rock'){

        if(compChoise === 'rock'){
            result = 'Its a draw.';
        }else if(compChoise === 'paper'){
            result = 'You lost.';
        }else{
            result = 'You won.';
        }
        updateScore();
    }else if(playerChoise === 'paper'){

        if(compChoise === 'rock'){
            result = 'You won.';
        }else if(compChoise === 'paper'){
            result = 'Its a draw.';
        }else{
            result = 'You lost.';
        }
        updateScore();
    }else if(playerChoise === 'scissors'){

        if(compChoise === 'rock'){
            result = 'You lost.';
        }else if(compChoise === 'paper'){
            result = 'You won.';
        }else{
            result = 'Its a draw.';
        }
        updateScore();
    }

    if(result === 'You lost.'){
        score.lose++;
    }else if(result === 'You won.'){
        score.win++;
    }else if(result === 'Its a draw.'){
        score.draw++;
    }
    showResult(result);
    showChoise(playerChoise, compChoise);

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    //alert(`your choise is ${playerChoise}. computer choise: ${compChoise}. ${result} \nScore:-\nwins: ${score.win}. loses: ${score.lose}. draw: ${score.draw}.`);
}

function updateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Score:  wins: ${score.win}. loses: ${score.lose}. draw: ${score.draw}.`;
}

function showChoise(playerChoise, compChoise) {
    document.querySelector('.js-choise')
        .innerHTML = `You
    <img src = "Move-img/${playerChoise}-emoji.png" class = "move-img">
    <img src = "Move-img/${compChoise}-emoji.png" class = "move-img">
    computer`;
}

function showResult(result){
    document.querySelector('.js-result').innerHTML = `${result}`;
}

function resetShow(){
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-choise').innerHTML = '';
}

function resetScore() {
    score.lose = 0;
    score.draw = 0;
    score.win = 0;
    localStorage.removeItem('score');
    updateScore();
    resetShow();
}
  

function OnclickAutoPlay(){
    const buttonState = document.querySelector('.js-auto-play');
    if(buttonState.innerText === 'Auto Play'){
        buttonState.innerHTML = 'Stop Playing';
    }else{
        buttonState.innerHTML = 'Auto Play';
    }
}

let isPlaying = false;
let intervalId;

function PlayAuto(){
    if(!isPlaying){
        intervalId = setInterval( function(){
            const playerMove = comp_Choise();
            playGame(playerMove);
        }, 1000);
        isPlaying = true;
    }else{
        clearInterval(intervalId);
        isPlaying = false;
    }
}