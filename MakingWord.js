const words = ['sum','sun','soul','sure','seem','see','sale','stare', 'time', 'man', 'woman', 'out', 'without', 'with', 'star', 'start', 'window',
         'lemon', 'cat', 'car', 'salt', 'cow', 'two', 'air','moon', 'coconut','tree', 'latte', 'camel', 'mountain'] //words for checked from in
const UserWords =[]

let submit = document.getElementById('submit');
let UserInput = ''
let IncorrectAnswer = UserInput = document.getElementById('IncorrectAnswer');
UserInput = document.getElementById('UserNumber');

submit.addEventListener("click", MakingWord);

function MakingWord(){
    UserInput.value = UserInput.value.toLowerCase();
    if(UserWords.includes(UserInput.value)){
        CorrectWords.textContent = 'Correct Words: ' + UserWords
    }else{
        if(words.includes(UserInput.value)){
            UserWords.push(UserInput.value)
            CorrectWords.textContent = 'Correct Words: ' + UserWords
        }else{
            CorrectWords.textContent = 'Correct Words: ' + UserWords
        }
    }
}