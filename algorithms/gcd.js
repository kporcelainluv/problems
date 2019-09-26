const countGcd = (max, min) => {
  const res = max - min * Math.floor(max / min);
  max = min;
  min = res;

  if (res === 0) {
    return max;
  } else {
    return countGcd(max, min);
  }
};

const gcd = (n1, n2) => {
  const maxN = Math.max(n1, n2);
  const minN = Math.min(n1, n2);
  return countGcd(maxN, minN);
};
module.exports = gcd;
