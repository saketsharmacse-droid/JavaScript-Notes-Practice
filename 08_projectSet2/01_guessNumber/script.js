let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    //this is to check whether guess is valid, and to check the number or not, and guess is in the range 1 to 100 or not.
    if(isNaN(guess))
    {
        alert('Please Enter a Valid Number')
    }
    else if(guess < 1) {
        alert('Please Enter a Number More Than 1')
    }
    else if(guess > 100) {
        alert('Please Enter a Number Less Than 100')
    }
    else {
        prevGuess.push(guess)
        if(numGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //yaha pe hum message print krenge ki sahi tha ki nhi, kyoki vakidate mei bus true false dega, uske baadf yaha btayenge ki sahi tha ki nhi.
    //check lrega ki wo entered value random number ke equal hai ki nhi, agar hai toh display message use krke print krwa dega.low hai toh low and high hai toh high bolega. 

    if(guess === randomNumber) {
        displayMessage(`Hurray!!, You Guessed It Right`)
        endGame()

    }
    else if(guess < randomNumber) {
        displayMessage(` Number is Too Low`)
    }
    else if(guess > randomNumber) {
        displayMessage(` Number is Too High`)
    }
}

function displayGuess(guess) {
    //cleanup method
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses += 1
    remaining.innerHTML = `${11 - numGuesses}`

}


function displayMessage(message) {
    // yeh waala method seedha dom ke saath interact krega, seedha display krr denge message ko, number of attempts reduce krr denge, , input value ko wapis se empty krr denge, kyoki usko next guess krna hai, aur humare innetHTML ke andar guess ko add krr denge.
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '') //yeh kiye taaki aur koi values enter nhi ho paaye, and setAttribute mei key value pairs me krte hai add, toh second field left empty ''.
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){

        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [] //this will reset the prev guesses
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true
    })
}








