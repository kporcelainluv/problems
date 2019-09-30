const variousTerms = n => {
  if (n < 3) {
    return n;
  }
  let sum = 1;
  let length = 1;
  let res = "1";
  let counter = 2;
  while (counter < n) {
    sum += counter;
    length += 1;
    if (sum === n) {
      res += " " + counter;
      break;
    } else if (sum + (counter + 1) > n) {
      sum -= counter;
      length -= 1;
    } else {
      res += " " + counter;
    }

    counter += 1;
  }
  return [length, { res }];
};
console.log(variousTerms(2));
module.exports = variousTerms;
