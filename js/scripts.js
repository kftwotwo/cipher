

var sentence = prompt("Please type a sentence!");

var firstLastSlice = function(sentenceInput) {
  return sentenceInput.slice(0, 1) + sentenceInput.slice(-1);
}
var result = firstLastSlice(sentence);
alert(result.toUpperCase());
