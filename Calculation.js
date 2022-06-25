let questions ={operator:'',answer: ''};
let answers = null;
let submetstart = document.getElementById('start');
let question=document.getElementById("question");
let UserInput=document.getElementById("UserInput");
let UserAnswer = document.getElementById("UserAnswer");

submetstart.addEventListener("click", start);

function start(){
    if(answers==null){
        let number1 = Math.floor(Math.random() * 20);
        let number2 = Math.floor(Math.random() * 20);
        let questions = randomOperator(number1,number2)
        question.textContent = questions.operator ;
        console.log(questions.answer)
        answers = questions.answer
        submetstart.textContent = 'Enter answer' ; 
    }else{
        if(UserInput.value==answers){
            UserAnswer.textContent = 'great !!'
            UserAnswer.style.color = '#72d66b';
            let number1 = Math.floor(Math.random() * 20);
            let number2 = Math.floor(Math.random() * 20);
            let questions = randomOperator(number1,number2)
            question.textContent = questions.operator ;
            answers = questions.answer
        }else{
            UserAnswer.textContent = 'Incorrect answer'
            UserAnswer.style.color = '#fc0303';
            let number1 = Math.floor(Math.random() * 20);
            let number2 = Math.floor(Math.random() * 20);
            let questions = randomOperator(number1,number2)
            question.textContent = questions.operator ;
            answers = questions.answer
        }
    }
}



function randomOperator(number1,number2) {
    let n = Math.floor(Math.random() * 4);
    switch (n) {
       case 0: 
         return {operator:`${number1} + ${number2}`,answer: number1+number2};
       case 1:
         return {operator:`${number1} - ${number2}`,answer: number1-number2}
       case 2:
         return {operator:`${number1} * ${number2}`,answer: number1*number2}
       case 3:
         return {operator:`${number1} / ${number2}`,answer: number1/number2}
    }
 }