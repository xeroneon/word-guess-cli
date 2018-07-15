function Letter(letter) {
    this.letter = letter;
    this.placeholder = "*";
    this.isGuessed = false;
}

Letter.prototype.returnChar = function() {
    if (this.isGuessed === true || this.letter === " ") {
        return this.letter;
    }else {
        return this.placeholder;
    }
}

module.exports = Letter;

