const median = require("./medianArr");

test("medianArr", () => {
  expect(median([1, 3], [2])).toBe(2.0);
  expect(median([1, 2], [3, 4])).toBe(2.5);
  expect(median([], [1])).toBe(1.0);
  expect(median([], [1, 2, 3, 4, 5])).toBe(3.0);
});
