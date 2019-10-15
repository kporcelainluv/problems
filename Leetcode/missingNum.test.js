const missingNum = require("./missingNum");

test("ugly", () => {
  expect(missingNum([3, 0, 1])).toBe(2);
  expect(missingNum([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});
