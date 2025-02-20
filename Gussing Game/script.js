let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.querySelector('.wrong');
let guesses = document.getElementById('guesses');

let answere = Math.floor(Math.random()*100) +1;

let numGussess = 0;

btn.addEventListener("click", ()=>{
    guessesNumber();
});

function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter between 1 to 100 ";
        
    }
    else{
        numGussess ++;
        guesses.innerHTML="Number of Gusess: " + numGussess;
        if(input.value < answere){
            wrng.innerHTML = "You Gusses too High!";
            input.value = "";
        }
        else if(input.value < answere){
            wrng.innerHTML = "You Gussed too Low!";
            input.value = "";
        }
        else{
            wrng.innerHTML = "Congrtulation you got right answere, You passed this exam!";
            btn.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000)
        }
    }
}

function resetGame(){
    numGussess = 0;
    answere = Math.floor(Math.random()*100) +1;
    input.value = "";
    guesses.innerHTML = "Number of Guess: 0";
}