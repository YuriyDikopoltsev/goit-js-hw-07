function findLongestWord(string = '') {
  let maxWordLength = 0;
  let maxWord = '';
  let wordLength = 0;

  for (let i = 0; i < string.split(' ').length; i += 1) {
    wordLength = string.split(' ')[i].length;
    if (wordLength > maxWordLength) {
      maxWordLength = wordLength;
      maxWord = string.split(' ')[i];
    }
  }
  return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
