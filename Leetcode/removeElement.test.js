const removeElement = require("./removeElement");

test("removeElement", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toStrictEqual([2, 2]);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toStrictEqual([
    0,
    1,
    3,
    0,
    4
  ]);
});
