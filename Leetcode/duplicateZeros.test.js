const duplicateZeros = require("./duplicateZeros");

test("1", () => {
  expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toBe([
    1,
    0,
    0,
    2,
    3,
    0,
    0,
    4
  ]);
  expect(duplicateZeros([1, 2, 3])).toBe([1, 2, 3]);
});
