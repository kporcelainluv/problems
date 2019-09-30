const removeDuplicates = require("./removeDuplicates");
test("removeDuplicates", () => {
  expect(removeDuplicates([1, 1, 2])).toStrictEqual([1, 2]);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toStrictEqual([
    0,
    1,
    2,
    3,
    4
  ]);
});
