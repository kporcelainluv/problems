const median = (a, b) => {
  const medianArr = a.concat(b).sort((a, b) => a - b);
  if (medianArr.length === 1) {
    return Math.round(medianArr[0]);
  }
  if (medianArr.length % 2 != 0) {
    const index = Math.floor(medianArr.length / 2);
    return Math.round(medianArr[index]);
  } else {
    const index = medianArr.length / 2;
    return (medianArr[index] + medianArr[index - 1]) / 2;
  }
};
module.exports = median;
