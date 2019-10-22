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

  return s.slice(start + 1, end);
};

const getMax = (max, candidate) => {
  return max.length >= candidate.length ? max : candidate;
};

const solution = s => {
  if (s.length < 2) {
    return s;
  }
  let maxPalindrome = s[0];
  for (let i = 0; i < s.length; i++) {
    maxPalindrome = getMax(maxPalindrome, findMaxPalindrome(s, i, "even"));
    maxPalindrome = getMax(maxPalindrome, findMaxPalindrome(s, i, "odd"));
  }
  return maxPalindrome;
};

module.exports = { longestPalindrome: solution, findMaxPalindrome };
