// const res = [];
//
// const binaryTreePaths = function(root) {
//   if (!root) {
//     return [];
//   }
//   checkTree(root, [], []);
//   console.log({ res });
// };
//
// const checkTree = (root, counter, counter2) => {
//   if (!root) {
//     return counter;
//   }
//   if (!root.right && !root.left) {
//
//   }
//   console.log({ root: root.val });
//   console.log({ counter, counter2 });
//   if (root.val) {
//     counter.push(root.val);
//     counter2.push(root.val);
//   }
//
//   return checkTree(root.right, counter) && checkTree(root.left, counter2);
// };
// console.log(
//   binaryTreePaths({
//     val: 1,
//     right: { val: 3, right: null, left: null },
//     left: { val: 2, right: { val: 5, right: null, left: null }, left: null }
//   })
// );
//
// // console.log(binaryTreePaths({ val: 1, right: null, left: null }));
// // console.log(
// //   binaryTreePaths({
// //     val: 1,
// //     right: null,
// //     left: { val: 2, right: null, left: null }
// //   })
// // );
const res = [];

const binaryTreePaths = function(root) {
  if (!root) {
    return [];
  } else if (!root.left && !root.right) {
    return [`${root.val}`];
  } else {
    let left = binaryTreePaths(root.left).map(x => root.val + "->" + x);
    let right = binaryTreePaths(root.right).map(x => root.val + "->" + x);

    return [...left, ...right];
  }
};

console.log(binaryTreePaths({ val: 1, right: null, left: null }));
console.log(
  binaryTreePaths({
    val: 1,
    right: { val: 3, right: null, left: null },
    left: {
      val: 2,
      right: { val: 5, right: null, left: null },
      left: { val: 6, right: null, left: null }
    }
  })
);
