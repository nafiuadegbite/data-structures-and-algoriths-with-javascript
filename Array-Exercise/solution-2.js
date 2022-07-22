// Question 2. Store a set of words in an array and display the contents both forward and backward.

// Set of words in an array
const words = [
  "the ",
  "quick ",
  "brown ",
  "jumps ",
  "over ",
  "the ",
  "lazy ",
  "dog ",
];

// Displaying the contents forward
const wordsForward = words.join("") || words.reduce((a, b) => a + b);
console.log(wordsForward);

// Displaying the contents backward
const wordsBackward = words.reduceRight((a, b) => a + b);
console.log(wordsBackward);
