const sumOfLeftLeaves = function(root) {
  let counter = 0;
  if (!root) {
    return counter;
  }
  return (
    recursion(root.left, `left`, counter) +
    recursion(root.right, `right`, counter)
  );
};

const recursion = (root, param, counter) => {
  if (!root) {
    return counter;
  }
  if (root.left === null && root.right === null && param === `left`) {
    counter += root.val;
    return counter;
  }

  return (
    recursion(root.left, "left", counter) +
    recursion(root.right, `right`, counter)
  );
};

console.log(
  sumOfLeftLeaves({
    val: 3,
    right: {
      val: 20,
      right: { val: 7, right: null, left: null },
      left: { val: 15, right: null, left: null }
    },
    left: { val: 9, right: null, left: null }
  })
);
console.log(
  sumOfLeftLeaves({
    val: 1,
    right: { val: 3, right: null, left: null },
    left: {
      val: 2,
      right: { val: 5, right: null, left: null },
      left: { val: 4, right: null, left: null }
    }
  })
);

console.log(
  sumOfLeftLeaves({
    val: 3,
    right: { val: 5, right: null, left: null },
    left: {
      val: 4,
      right: {
        val: -6,
        right: null,
        left: {
          val: -5,
          right: null,
          left: { val: -4, right: null, left: null }
        }
      },
      left: { val: -7, right: null, left: { val: -7, right: null, left: null } }
    }
  })
);
