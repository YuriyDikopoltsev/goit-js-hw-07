function checkForSpam(str) {
  'use strict';
  let checkingWord = ' ';
  let spamWord1 = 'spam';
  let spamWord2 = 'sale';

  for (let i = 0; i < str.split(' ').length; i += 1) {
    // console.log(str.split(' ')[i]);
    checkingWord = str.split(' ')[i];
    checkingWord = checkingWord.toLowerCase();
    // console.log(checkingWord);
    if (checkingWord.includes(spamWord1) || checkingWord.includes(spamWord2)) {
      return true;
    }
  }
  return false;
}
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
