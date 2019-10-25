const lettersOnBts = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

const res = [];

const buildPossibleStrings = (nums, combination) => {
  if (nums.length === 0) {
    const digit = nums[0];
    for (let letter in lettersOnBts[digit]) {
      buildPossibleStrings(nums.slice(1), combination + letter);
    }
  } else {
    res.push(combination);
  }
};
