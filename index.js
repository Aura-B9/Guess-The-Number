const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum +1) + minNum);
document.getElementById("printResult").textContent = `Guess any number between ${minNum} - ${maxNum} `;

console.log(answer);

let running = true;
let guess;
let attempts = 0;

document.getElementById("guessBtn").onclick = function(){

    while(running){
        guess = document.getElementById(`guessNum`).value
        guess = Number(guess);

        if(isNaN(guess)){
            document.getElementById("printResult").textContent = `Enter Valid Number `;
            break;
        }
        else if(guess < minNum || guess > maxNum){
            document.getElementById("printResult").textContent = `Enter Valid Number `;
            break;
        }
        else {
            attempts ++;

            if(guess > answer){
                document.getElementById("printResult").textContent = `Too HIGH!! Try Again  `;
                break;
            }
            else if(guess < answer){
                document.getElementById("printResult").textContent = `Too LOW!! Try Again  `;
                break;
            }
            else{
                document.getElementById("printResult").textContent = `You Guessed it right in ${attempts} attemps`;
                running = false;
                break;
            }
        }

        
    }
}

document.getElementById("resetBtn").onclick = function(){
    attempts = 0;
    const answer = Math.floor(Math.random()*(maxNum - minNum +1) + minNum); 
    guess = "";
    running= true;

    document.getElementById("printResult").textContent = `Guess any number between ${minNum} - ${maxNum} `;
    
    document.getElementById("guessNum").value = ``;

}