var inputSentence = prompt("Enter a sentence:")

console.log(inputSentence);

var firstAndLast = function(firstLetter, lastLetter) {
  return(firstLetter.toUpperCase());
  return(lastLetter.toUpperCase());
}

var firstLetterInput = inputSentence.charAt(0);
var lastLetterInput = inputSentence.charAt(inputSentence.length-1);

console.log(firstAndLast(firstLetterInput + lastLetterInput));

var reverseLetters = function(firstLetter, lastLetter) {
  return(lastLetter.toUpperCase() + firstLetter.toUpperCase());
}

console.log(reverseLetters(firstLetterInput, lastLetterInput));

var runBothFunctions = function(firstLetter, lastLetter) {
  console.log(firstAndLast(firstLetter, lastLetter));
  alert(inputSentence + reverseLetters(firstLetter, lastLetter));

}

runBothFunctions(firstLetterInput, lastLetterInput);