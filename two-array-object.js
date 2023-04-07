"use strict";
// add whatever parameters you deem necessary & write docstring
/** Takes 2 arrays of possible different length - first is keys second is values
 *  Return an object created from keys and vals
 */
function twoArrayObject(keys, values) {
  let finalObj = {};

  if(values.length < keys.length) {
    for(let i = values.length; i < keys.length; i++) {
      values.push(null);
    }
  }

  for(let i = 0; i < keys.length; i++) {
    finalObj[keys[i]] = values[i];
  }

  return finalObj;
}
