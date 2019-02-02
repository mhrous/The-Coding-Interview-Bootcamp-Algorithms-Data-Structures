// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let counter = 0;
//   let vawel = ['a', 'e', 'i', 'o', 'u'];
//   for (let char of str.toLowerCase()) {
//     if (vawel.includes(char)) counter++;
//   }
//   return counter;
// }

function vowels(str) {
  const m = str.match(/['a','e','i','o','u']/gi);
  return m ? m.length : 0;
}

module.exports = vowels;
