const Word = require("./word.js");

const inquirer = require("inquirer");

const wordArr = ["prototpye", "nodejs", "mongo", "somethihng", "another thing"];

let r = Math.floor(Math.random() * wordArr.length);

let currentWord = new Word(wordArr[r]);



// console.log(currentWord);

function playGame() {
    console.log("try to guess the word\n");
    currentWord.printWord();

    inquirer.prompt([
        {
            type: "input",
            message: "What letter would you like to guess?",
            name: "userLetter"
        }
    ]).then(function (response) {
        currentWord.guessLetter(response.userLetter);
        let trueCount = 0;

        for (let i = 0; i < currentWord.letters.length; i++) {
            if (currentWord.letters[i].isGuessed === true) {
                trueCount++
            }
        }

        if (trueCount < currentWord.letters.length) {
            trueCount = 0;
            playGame();
        } else {
            console.log("you guessed the word!");
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "playAgain"
                }
            ]).then(function (response) {
                if (response.playAgain === true) {
                    r = Math.floor(Math.random() * wordArr.length);
    
                    currentWord = new Word(wordArr[r]);
    
                    playGame();
                }
            })
        }

    })
}

playGame();