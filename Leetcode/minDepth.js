const minDepth = function(root) {
  if (root !== null) {
  } else {
  }

  if (!root) {
    return 0;
  }
  if (root.left === null) {
    return minDepth(root.right) + 1;
  }
  if (root.right === null) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

console.log(
  minDepth({
    val: 3,
    right: {
      val: 20,
      right: { val: 15, right: null, left: null },
      left: { val: 7, right: null, left: null }
    },
    left: { val: 9, right: null, left: null }
  })
);

console.log(
  minDepth({
    root: {
      val: 1,
      right: null,
      left: { val: 2, right: null, left: null }
    }
  })
);
