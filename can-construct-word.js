"use strict";
// add whatever parameters you deem necessary & write doc comment
/**takes in 2 strings
 * checks if second string has enough letters to build out first string 'word'
 * returns boolean true it does and false if not
 * canConstructWord('aa', 'abc');
  // false
  canConstructWord('abc', 'dcba');
  // true
 */
function canConstructWord(word, letters) {
  function getFrequencyCounter(string) {
    const frequencyCounter = {};

    for(let char of string) {
      let counter = frequencyCounter[char]||0;
      frequencyCounter[char] = counter + 1;
    }

    return frequencyCounter;
  }

  const frequencyCounter = getFrequencyCounter(letters);

  for(let char of word) {
    if(frequencyCounter[char] === undefined || frequencyCounter[char] === 0){
      return false;
    } else {
      frequencyCounter[char]--;
    }
  }

  return true;
}
