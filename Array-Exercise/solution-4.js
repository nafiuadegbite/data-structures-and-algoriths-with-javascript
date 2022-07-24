// Question 4. Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word.

class Letters {
  constructor() {
    this.letterArray = [];
  }

  addLetter(...letter) {
    this.letterArray.push(...letter);
  }

  displayWord() {
    return this.letterArray.join("");
  }
}

const firstWord = new Letters();
firstWord.addLetter("R", "i", "c", "e");

const secondWord = new Letters();
secondWord.addLetter("B", "e", "a", "n", "s");

console.log(firstWord.displayWord());
console.log(secondWord.displayWord());
