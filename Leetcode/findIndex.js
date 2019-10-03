// const findIndex = (arr, elm) => {
//   let index = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elm) {
//       index = i;
//       break;
//     } else if (arr[0] > elm) {
//       index = 0;
//       break;
//     } else if (
//       (arr[i] < elm && arr[i + 1] > elm) ||
//       (arr[i] < elm && i === arr.length - 1)
//     ) {
//       index = i + 1;
//       break;
//     }
//   }
//   return index;
// };

// attempt 2

const findIndex = (arr, elm) => {
  let index = 0;
  if (arr[0] > elm) {
    return 0;
  }
  index = arr.indexOf(elm);
  if (index !== -1) {
    return index;
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] < elm && arr[i + 1] > elm) ||
      (arr[i] < elm && i === arr.length - 1)
    ) {
      index = i + 1;
      break;
    }
  }
  return index;
};

module.exports = findIndex;
