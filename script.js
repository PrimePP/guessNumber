'use strict';

//using event Listner

//targetting the button
const checkBtn = document.querySelector('.check');
const secretnumber = Math.floor(Math.random()*20+1); //generates random number from 0 to 20
let score = document.querySelector('.score').textContent ;
console.log(secretnumber);
let currentScore = 0;
function checkInput(){
    const userInput = Number(document.querySelector('.guess').value);
    console.log(typeof userInput);
        if(userInput === 0){
            document.querySelector('.message').textContent = "Number not greater than 0.Try again 🚫"
        }else if(userInput === secretnumber){
            document.querySelector('.message').innerHTML = 'Haha Congrats ✅'; 
            score ++;
            document.querySelector('.score').textContent = score;
            document.body.style.backgroundColor = "#60b347";
            document.querySelector('.number').innerHTML = secretnumber;
            document.querySelector('.number').style.width = '30rem'
            if(currentScore < score){
            currentScore =score;
            document.querySelector('.highscore').innerHTML =currentScore;
            }
        }else if(userInput > secretnumber){
            score --;
           if(score < 1){
            document.querySelector('.message').innerHTML = 'You lost the game. Try gain'; 
            document.querySelector('.score').textContent = 0;
           }else{
            document.querySelector('.message').innerHTML = 'Your number is greater 📈'; 
            document.querySelector('.score').textContent = score;
           }
        }else if(userInput < secretnumber){
            score --;
           if(score< 1){
            document.querySelector('.highscore').innerHTML =currentScore;
            document.querySelector('.message').innerHTML = 'You lost the game. Try gain'; 
            document.querySelector('.score').textContent = 0;
           }else{
            document.querySelector('.message').innerHTML = 'Your number is lesser 📉'; 
            document.querySelector('.score').textContent = score;
           }
        }
    }
checkBtn.addEventListener('click',checkInput);


//working on the again button

//capturing button
const againBtn = document.querySelector('.again');

function resetAll(){
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.guess').value = '';
}


//event handler on againBtn
againBtn.addEventListener('click',resetAll);