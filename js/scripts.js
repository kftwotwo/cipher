

var sentence = prompt("Please type a sentence!");

var firstLastSlice = function(sentenceInput) {
  var result = sentenceInput.slice(0, 1) + sentenceInput.slice(-1);
  return result.toUpperCase();
}

var reverse = function(sentenceInput) {
  var result = sentenceInput.slice(-1) + sentenceInput.slice(0, 1);
  return result.toUpperCase();
}

alert(firstLastSlice(sentence));
alert(reverse(sentence));
