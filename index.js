const Word = require("./word.js");

const inquirer = require("inquirer");

const wordArr = ["prototype", "nodejs", "mongodb", "mysql", "cascading style sheets", "python", "javascript", "firebase", "youll never guess what this sentence says in a million zillion years"];

let r = Math.floor(Math.random() * wordArr.length);

let currentWord = new Word(wordArr[r]);

let guesses = 10;
let wins = 0;
let losses = 0;

// console.log(currentWord);

function playGame() {
    console.log("\nWins: " + wins + "    Losses: " + losses + " Guesses: " + guesses + "\n" )
    console.log("Try to guess the word\n");
    currentWord.printWord();

    inquirer.prompt([
        {
            type: "input",
            message: "What letter would you like to guess?",
            name: "userLetter"
        }
    ]).then(function (response) {
        currentWord.guessLetter(response.userLetter.toLowerCase());
        let trueCount = 0;
        let falseCount = 0;

        for (let i = 0; i < currentWord.letters.length; i++) {
            if (currentWord.letters[i].isGuessed === true) {
                trueCount++
            }

            if(response.userLetter != currentWord.letters[i].letter) {
                falseCount++;
            }
        }

        if (falseCount === currentWord.letters.length) {
            guesses--;
        }

        if (guesses === 0) {
            console.log("\nYou lost the word was " + currentWord.word);
        }

        else if (trueCount < currentWord.letters.length) {
            trueCount = 0;
            playGame();
        } else {
            console.log("you guessed the word!");
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "\nWould you like to play again?",
                    name: "playAgain"
                }
            ]).then(function (response) {
                if (response.playAgain === true) {
                    r = Math.floor(Math.random() * wordArr.length);
    
                    currentWord = new Word(wordArr[r]);
    
                    playGame();
                } else {
                    console.log("\nOkay we can play again another time.")
                }
            })
        }

    })
}

playGame();