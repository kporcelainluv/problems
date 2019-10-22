const longestPalindrome = string => {
  if (string.length < 2) {
    return string;
  }
  let palindromes = [];
  let res = "";
  for (let i = 0; i < string.length; i++) {
    res = "";
    for (let j = i; j < string.length; j++) {
      res += string[j];
      if (
        res ===
        res
          .split("")
          .reverse()
          .join("")
      ) {
        palindromes = [...palindromes, res];
      }
    }
  }

  return palindromes.sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    }
    return 0;
  })[0];
};

const findMaxPalindrome = (s, index, type) => {
  let start = index - 1;
  let end = type === "even" ? index : index + 1;

  while (true) {
    if (start >= 0 && end < s.length) {
      if (s[start] === s[end]) {
        start -= 1;
        end += 1;
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return [start + 1, end];
};

const getMax = (max, candidate) => {
  return max[1] - max[0] >= candidate[1] - candidate[0] ? max : candidate;
};

const solution = s => {
  if (s.length < 2) {
    return s;
  }

  let maxPalindrome = [0, 1];
  for (let i = 0; i < s.length; i++) {
    maxPalindrome = getMax(maxPalindrome, findMaxPalindrome(s, i, "even"));
    maxPalindrome = getMax(maxPalindrome, findMaxPalindrome(s, i, "odd"));
  }

  return s.slice(maxPalindrome[0], maxPalindrome[1]);
};

module.exports = { longestPalindrome: solution, findMaxPalindrome };
