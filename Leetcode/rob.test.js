const rob = require("./rob");

test("ugly", () => {
  expect(rob([1, 2, 3, 1])).toBe(4);
  expect(rob([2, 7, 9, 3, 1])).toBe(12);
  expect(rob([1, 1])).toBe(1);
});
