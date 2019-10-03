const findIndex = require("./findIndex");

test("findIndex", () => {
  expect(findIndex([1, 3, 5, 6], 2)).toBe(1);
  expect(findIndex([1, 3, 5, 6], 5)).toBe(2);
  expect(findIndex([1, 3, 5, 6], 7)).toBe(4);
  expect(findIndex([1, 3, 5, 6], 0)).toBe(0);
});
