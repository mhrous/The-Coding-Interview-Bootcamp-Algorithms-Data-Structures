// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -100000, max = 1000000) {
  let L, R;
  L = R = true;

  if (node.left) {
    L =
      node.left.data > min &&
      node.left.data < max &&
      validate(node.left, min, node.data);
  }
  if (node.right) {
    R =
      node.right.data > min &&
      node.right.data < max &&
      validate(node.right, node.data, max);
  }
  return L && R;
}

module.exports = validate;
