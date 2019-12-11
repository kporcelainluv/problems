const closestPoints = (amount, arr) => {
  const sortedArr = arr.sort((a, b) => {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    }
    return 0;
  });

  let index = 0;
  let currentIndex = 0;
  let res = [];
  while (index < sortedArr.length - 1) {
    if (currentIndex >= sortedArr.length) {
      index += 1;
      currentIndex = index;
    }
    res.push(
      countRes(
        sortedArr[index][0],
        sortedArr[index][1],
        sortedArr[currentIndex][0],
        sortedArr[currentIndex][1]
      )
    );
    currentIndex += 1;
  }
  console.log({ res });
  console.log(res.sort((a, b) => a - b));
};

const countRes = (x1, x2, y1, y2) => {
  let a = (x1 - x2) ** 2;
  let b = (y1 - y2) ** 2;
  return Math.sqrt(a + b);
};
// closestPoints(4, [[7, 7], [1, 100], [4, 8], [7, 7]]);
closestPoints(11, [
  [4, 4],
  [-2, -2],
  [-3, -4],
  [-1, 3],
  [2, 3],
  [-4, 0],
  [1, 1],
  [-1, -1],
  [3, -1],
  [-4, 2],
  [-2, 4]
]);
