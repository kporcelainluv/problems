const maxDepth = function(root) {
  console.log({ root }, "yay");
  if (!root) {
    return 0;
  }
  if (root.right === null && root.left === null) {
    return 1;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
console.log(
  maxDepth({
    val: 3,
    right: {
      val: 20,
      right: { val: 15, right: null, left: null },
      left: { val: 7, right: null, left: null }
    },
    left: { val: 9, right: null, left: null }
  })
);
