// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
};

module.exports = reverse;

// const reverse = str =>
//   str
//     .split("")
//     .reverse()
//     .join("");

// const reverse = str => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     reversed += str[i];
//   }
//   return reversed;
// };

// const reverse = str => {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// };
