// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function get_0_array(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push([]);
    for (let j = 0; j < n; j++) {
      array[i].push(0);
    }
  }

  return array;
}
function getMove(char) {
  switch (char) {
    case 'l':
      return [0, 1];
    case 'b':
      return [1, 0];
    case 'r':
      return [0, -1];
    case 't':
      return [-1, 0];

    default:
      break;
  }
}

function matrix(n) {
  let array = get_0_array(n);

  const dir = ['l', 'b', 'r', 't'];
  let d = 0;
  const end = n * n;
  let start = 1;
  let i, j;
  i = j = 0;
  while (start <= end) {
    array[i][j] = start;
    start++;
    let move = getMove(dir[d % dir.length]);
    let _i = i + move[0];
    let _j = j + move[1];

    if (_i < n && _j < n && _i >= 0 && _j >= 0 && array[_i][_j] == 0) {
      i = _i;
      j = _j;
      continue;
    }
    d++;
    move = getMove(dir[d % dir.length]);
    i += move[0];
    j += move[1];
  }
  return array;
}

let y = matrix(10);
console.table(y);

module.exports = matrix;
