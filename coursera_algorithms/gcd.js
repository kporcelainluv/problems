const getGcd = (a, b) => {
  let first = a > b ? a : b;
  let second = a < b ? a : b;
  let third;
  while (true) {
    third = second;
    second = first % second;
    first = third;
    if (second === 0) {
      break;
    }
  }

  return first;
};

console.log(getGcd(3918848, 1653264));

console.log(getGcd(106, 16));
