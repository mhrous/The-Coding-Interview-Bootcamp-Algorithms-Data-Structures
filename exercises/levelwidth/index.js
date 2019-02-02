// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let array = [1];
  let queue = [root];
  while (queue.length) {
    let conter = 0;
    let L_W = array[array.length - 1];
    while (L_W--) {
      let first = queue.shift();
      conter += first.children.length;
      queue.push(...first.children);
    }
    if (conter) array.push(conter);
  }
  return array;
}

module.exports = levelWidth;
