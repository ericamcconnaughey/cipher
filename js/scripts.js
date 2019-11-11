var inputSentence = prompt("Enter a sentence:")

console.log(inputSentence);

var firstLetterInput = inputSentence.charAt(0);
var lastLetterInput = inputSentence.charAt(inputSentence.length-1);

var reverseLetters = function(firstLetter, lastLetter) {
  return lastLetter.toUpperCase() + firstLetter.toUpperCase();
}

console.log(reverseLetters(firstLetterInput, lastLetterInput));

// var runBothFunctions = function(firstLetter, lastLetter) {
//   alert(inputSentence + reverseLetters(firstLetter, lastLetter));
// }

// runBothFunctions(firstLetterInput, lastLetterInput);

var getMiddleCharacter = function(sentence) {
  return sentence.charAt(sentence.length / 2);
}

console.log(getMiddleCharacter(inputSentence));

var middleCharacter = getMiddleCharacter(inputSentence); 
var reversedLetters = reverseLetters(firstLetterInput, lastLetterInput);

var message = middleCharacter + inputSentence + reversedLetters;

alert(message);