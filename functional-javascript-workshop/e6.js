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

/** offical solution
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
module.exports = countWords
**/
