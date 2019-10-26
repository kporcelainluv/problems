const findDisappearedNumbers = require("./lettersOnPhone");

test("ugly", () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 1])).toStrictEqual([5, 6]);
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([
    5,
    6
  ]);
  expect(findDisappearedNumbers([2, 2])).toStrictEqual([1]);
  expect(findDisappearedNumbers([1, 1])).toStrictEqual([2]);
  expect(findDisappearedNumbers([1, 1, 2, 2])).toStrictEqual([3, 4]);
});
