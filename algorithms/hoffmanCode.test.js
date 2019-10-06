const hoffmanCode = require("./hoffmanCode");
test("test 1", () => {
  expect(hoffmanCode("abacabad")).toBe("01001100100111");
});
