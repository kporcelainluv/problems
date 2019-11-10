const isPowerOfTwo = function(n) {
  if (n < 1) {
    return false;
  }
  let currentN = n;
  while (currentN > 2) {
    currentN = n / 2;
    if (currentN % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};
test("isPowerOfTwo", () => {
  // expect(isPowerOfTwo(1)).toBe(true);
  expect(isPowerOfTwo(16)).toBe(true);
  // expect(isPowerOfTwo(218)).toBe(false);
});
