"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 *
 * @param {*} num1
 * @param {*} num2
 * takes 2 numbers and compares the frequency of digits
 * returns true if they have the same frequency of digits and false otherwise
 */
function sameFrequency(num1, num2) {
  function getFrequencyCounter(string) {
    const frequencyCounter = {};

    for (let char of string) {
      let counter = frequencyCounter[char] || 0;
      frequencyCounter[char] = counter + 1;
    }

    return frequencyCounter;
  }

  if (num1.toString().length !== num2.toString().length) {
    return false;
  }

  let num1Freq = getFrequencyCounter(num1.toString());
  let num2Freq = getFrequencyCounter(num2.toString());

  for (let key in num1Freq) {
    if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }
  return true;
}
