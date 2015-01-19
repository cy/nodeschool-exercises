function countWords(inputWords) {
  return inputWords.reduce(function(p, c) {
    if(p[c]) {
      p[c] = p[c] + 1;
    } else {
      p[c] = 1;
    }
    return p;
  }, {});
}

module.exports = countWords
