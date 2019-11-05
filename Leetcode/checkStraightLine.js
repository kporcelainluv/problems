const checkIndexChanges = (arr, index) => {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (!(arr[i][index] === arr[i - 1][index])) {
      return false;
    }
  }
  return true;
};

const checkStraightLine = arr => {
  if (checkIndexChanges(arr, 0)) {
    return true;
  } else if (checkIndexChanges(arr, 1)) {
    return true;
  } else {
    for (let i = 1; i <= arr.length; i++) {
      if (
        !(
          Math.abs(arr[i][0]) - Math.abs(arr[i - 1][0]) ===
          Math.abs(arr[i][1]) - Math.abs(arr[i - 1][1])
        )
      ) {
        return false;
      }
    }
  }
};
module.exports = checkStraightLine;
