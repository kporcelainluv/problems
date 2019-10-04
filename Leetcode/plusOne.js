var plusOne = function(digits) {
  digits = digits.reverse();
  digits[0] += 1;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      if (i === digits.length - 1) {
        digits.push(1);
      } else {
        digits[i + 1] += 1;
      }
    }
  }
  return digits.reverse();
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]);
