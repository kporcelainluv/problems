const checkStraightLine = require("./checkStraightLine");

test("1", () => {
  // expect(
  //   checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])
  // ).toBe(false);
  //
  // expect(
  //   checkStraightLine([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]])
  // ).toBe(true);
  expect(
    checkStraightLine([[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]])
  ).toBe(true);
});
