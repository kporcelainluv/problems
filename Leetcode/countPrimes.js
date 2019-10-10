// var countPrimes = function(n) {
//   let res = [];
//   let numsUnder10 = [2, 3, 4, 5, 6, 7, 8, 9];
//   let indexN = 2;
//   while (indexN < n) {
//     let middlecheck = numsUnder10.filter(elm => {
//       if (indexN % elm === 0) {
//         return true;
//       }
//       return false;
//     });
//     if (
//       (middlecheck.length === 1 && middlecheck[0] === indexN) ||
//       middlecheck.length === 0
//     ) {
//       res = [...res, indexN];
//       numsUnder10.push(indexN);
//     }
//     indexN += 1;
//   }
//   return res.length;
// };

var countPrimes = function(n) {
  let res = [];
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (checkPrime(i, res)) {
      res.push(i);
      count++;
    }
  }
  return count;
};

const checkPrime = (number, collection) => {
  let result = true;

  for (
    y = 0;
    y < collection.length && collection[y] <= Math.sqrt(number);
    y++
  ) {
    if (number % collection[y] === 0) {
      result = false;
      break;
    }
  }

  return result;
};
