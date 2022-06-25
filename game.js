let submit = document.getElementById('submit');
let UserInput = document.getElementById('UserNumber');
let result = document.getElementById('result');
let chance = document.getElementById('chance');
let CorrectWords = document.getElementById('CorrectWords');
let IncorrectAnswer = document.getElementById('IncorrectAnswer');
let chances = 6 ; 

submit.addEventListener("click", GuessNumber);


RandomNumber = Math.floor(Math.random() * 51);
let counter = 0 ; 
function GuessNumber(){
if (counter <5){
    if (UserInput.value < RandomNumber){ 
        result.innerText = 'Sorry, the guessing number is less than the number'
        result.style.color = '#fc0303';
        chances = chances-1
        chance.innerText = `You have ${chances} chances`
        counter = counter+1;}
    else if(UserInput.value > RandomNumber){
        result.innerText = 'Sorry, the guessing number is greater than the number'
        chances = chances-1
        chance.innerText = `You have ${chances} chances`
        result.style.color = '#fc0303';
        counter = counter+1;
        guessed_number.push(UserInput.value);}
    else {
        result.innerText = "Great !! guess right"
        result.style.color = '#72d66b';
        result.style.fontSize = '40px';
    }
}else{
    result.innerText = "Game Over"
    chance.innerText = 'You have 0 chances'
    result.style.color = '#fc0303';
    result.style.fontSize = '50px';}
}
