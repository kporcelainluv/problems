// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) {
//     return s.length;
//   }
//   let sequenceArr = [s[0]];
//   let res = [];
//   for (let i = 1; i < s.length; i++) {
//     if (sequenceArr.includes(s[i])) {
//       sequenceArr = sequenceArr.slice(
//         sequenceArr.indexOf(s[i]) + 1,
//         sequenceArr.length
//       );
//     }
//     sequenceArr.push(s[i]);
//     if (res.length < sequenceArr.length) {
//       res = sequenceArr;
//     }
//   }
//   return res.length;
// };

function contains(s, start, finish, elm) {
  for (let i = start; i < finish; i++) {
    if (s[i] === elm) {
      return i;
    }
  }
  return -1;
}

var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }
  let start = 0;
  let finish = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(res);
    const x = contains(s, start, finish, s[i]);
    if (x != -1) {
      start = x + 1;
    }
    finish += 1;
    if (finish - start > res) {
      res = finish - start;
    }
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
