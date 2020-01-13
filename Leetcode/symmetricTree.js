const isSymmetric = function(root) {
  if (!root) {
    return root;
  }
  return isMirrored(root.left, root.right);
};
const isMirrored = (left, right) => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return (
    left.val === right.val &&
    isMirrored(left.left, right.right) &&
    isMirrored(left.right, right.left)
  );
};

console.log(
  isSymmetric({
    val: 1,
    right: {
      val: 2,
      right: { val: 3, right: null, left: null },
      left: { val: 4, right: null, left: null }
    },
    left: {
      val: 2,
      right: { val: 4, right: null, left: null },
      left: { val: 3, right: null, left: null }
    }
  })
);

console.log("------------- -------------");
console.log(
  isSymmetric({
    val: 1,
    right: { val: 2, right: { val: 3, right: null, left: null }, left: null },
    left: { val: 2, right: { val: 3, right: null, left: null }, left: null }
  })
);

console.log("------------- -------------");
console.log(
  isSymmetric({
    val: 1,
    right: { val: 2, right: { val: 3, right: null, left: null }, left: null },
    left: { val: 2, right: null, left: { val: 3, right: null, left: null } }
  })
);
console.log("-------------d  -------------");
console.log(isSymmetric({}));
console.log("-------------d  -------------");
console.log(
  isSymmetric({
    val: 1,
    right: { val: 2, right: null, left: { val: 3, right: null, left: null } },
    left: { val: 2, right: { val: 3, right: null, left: null }, left: null }
  })
);
