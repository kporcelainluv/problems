const isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }
  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
console.log(
  isSameTree(
    {
      val: 1,
      right: { val: 3, right: null, left: null },
      left: { val: 2, right: null, left: null }
    },
    {
      val: 1,
      right: { val: 3, right: null, left: null },
      left: { val: 2, right: null, left: null }
    }
  )
);

console.log(
  isSameTree(
    {
      val: 1,
      right: null,
      left: { val: 2, right: null, left: null }
    },
    {
      val: 1,
      right: { val: 2, right: null, left: null },
      left: null
    }
  )
);

console.log(
  isSameTree(
    {
      val: 1,
      right: { val: 1, right: null, left: null },
      left: { val: 2, right: null, left: null }
    },
    {
      val: 1,
      right: { val: 2, right: null, left: null },
      left: { val: 1, right: null, left: null }
    }
  )
);
console.log(isSameTree([], []));
