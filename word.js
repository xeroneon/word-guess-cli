const Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    word = word.split("");
    for (let i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    }
}

Word.prototype.printWord = function() {
    let word = "";
    for (let i = 0; i < this.letters.length; i++) {
        word += this.letters[i].returnChar();
    }
    console.log("word: ", word + "\n");
    
}

Word.prototype.guessLetter = function(letter) {
    for (let i = 0; i < this.letters.length; i++) {
        if (this.letters[i].letter === letter || this.letters[i].letter === " ") {
            this.letters[i].isGuessed = true;
        }
    }
}

module.exports = Word;