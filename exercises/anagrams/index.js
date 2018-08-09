// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const stringToObj = str => {
  let obj = {};
  str = str.replace(/[^\w]/g, "").toLowerCase();
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
};

function anagrams(stringA, stringB) {
  let objA = stringToObj(stringA);
  let objB = stringToObj(stringB);
  if (Object.keys(objA).length != Object.keys(objB).length) return false;

  for (let key in objB) {
    if (objA[key] != objB[key]) return false;
  }
  return true;
}

module.exports = anagrams;
