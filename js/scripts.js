var inputSentence = prompt("Enter a sentence:")

console.log(inputSentence);

var firstAndLast = function(firstLetter, lastLetter) {
  return(firstLetter.toUpperCase());
  return(lastLetter.toUpperCase());
}

var firstLetter = inputSentence.charAt(0);
var lastLetter = inputSentence.charAt(inputSentence.length-1);

console.log(firstAndLast(firstLetter + lastLetter));