const longestPrefix = require("./longestPrefix");

test("palindrome1", () => {
  expect(longestPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestPrefix(["aca", "cba"])).toBe("");
  expect(longestPrefix(["a"])).toBe("a");
  expect(longestPrefix([""])).toBe("");
  expect(longestPrefix(["a", "b"])).toBe("");
});
