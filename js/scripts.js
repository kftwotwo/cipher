

var sentence = prompt("Please type a sentence!");

var firstLastSlice = function(sentenceInput) {
  var result = sentenceInput.slice(0, 1) + sentenceInput.slice(-1);
  return result.toUpperCase();
}

var reverse = function(sentenceInput) {
  var result = sentenceInput.slice(-1) + sentenceInput.slice(0, 1);
  return result.toUpperCase();
}

var addReverse = function(letters, sentenceInput) {
  return sentenceInput + letters;
}

var halfWay = function(sentence) {
  var result = sentence.length / 2;
  var result2 = sentence.charAt(result);
  return result2 + sentence;
}





alert(firstLastSlice(sentence));
alert(reverse(sentence));
alert(addReverse(reverse(sentence), sentence));
alert(halfWay(sentence));
