function Letter(letter) {
    this.letter = letter;
    this.placeholder = "_";
    this.isGuessed = false;
}

Letter.prototype.returnChar = function() {
    return this.letter;
}

Letter.prototype.returnPlace = function() {
    return this.placeholder;
}

module.exports = Letter;

