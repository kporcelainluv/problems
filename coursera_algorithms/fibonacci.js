const fibNums = num => {
  if (num < 2) {
    return num;
  }
  let first = 1;
  let second = 1;
  let index = 2;
  let third;
  while (index < num) {
    third = second + first;
    second = first;
    first = third;

    index += 1;
  }
  return first;
};
console.log(fibNums(10));
