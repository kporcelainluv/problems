const anagram = require("./anagram");

test("climbingStair", () => {
  expect(anagram("anagram", "nagaram")).toBe(true);
  expect(anagram("rat", "car")).toBe(false);
});
