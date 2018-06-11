// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const negtiev = n < 0;
  let str = String(Math.abs(n))
    .split("")
    .reverse()
    .join("");
  if (negtiev) str = "-" + str;
  return Number(str);
};

module.exports = reverseInt;
