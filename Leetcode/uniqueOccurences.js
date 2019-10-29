const uniqueOccurrences = arr => {
  const numbersLength = {};
  arr.forEach(elm => {
    if (elm in numbersLength) {
      numbersLength[elm] += 1;
    } else {
      numbersLength[elm] = 1;
    }
  });
  const numsLengthVals = Object.values(numbersLength).sort();

  for (let i = 1; i < numsLengthVals.length; i++) {
    if (numsLengthVals[i] === numsLengthVals[i - 1]) {
      return false;
    }
  }
  return true;
};
module.exports = uniqueOccurrences;
