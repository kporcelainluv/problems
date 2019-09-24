// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }
  let sequenceArr = [s[0]];
  let res = [];
  let i = 1;
  while (i < s.length) {
    if (sequenceArr.includes(s[i])) {
      sequenceArr = sequenceArr.slice(
        sequenceArr.indexOf(s[i]) + 1,
        sequenceArr.length
      );
    }
    sequenceArr.push(s[i]);
    i += 1;
    if (res.length < sequenceArr.length) {
      res = sequenceArr;
    }
  }
  return res.length;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
