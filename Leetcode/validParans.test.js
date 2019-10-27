const isValid = require("./validParans");

test("1", () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("(]")).toBe(false);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("([)]")).toBe(false);
  expect(isValid("{[]}")).toBe(true);
  expect(isValid("[")).toBe(false);
});
