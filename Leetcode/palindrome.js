// var isPalindrome = function(x) {
//   if (x < 0 || (x % 10 === 0 && x != 0)) {
//     return false;
//   }

//   return (
//     parseInt(
//       x
//         .toString()
//         .split("")
//         .reduceRight((acc, n) => {
//           acc.push(n);
//           return acc;
//         }, [])
//         .join("")
//     ) === x
//   );
// };

// !recursion!

const reverseNumber = (n, x) => {
  if (n < 1) {
    return x;
  }
  return reverseNumber(Math.floor(n / 10), x * 10 + (n % 10));
};

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const res = reverseNumber(x, 0);
  return res === x;
};
module.exports = isPalindrome;
