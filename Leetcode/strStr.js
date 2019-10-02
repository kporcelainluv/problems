// attempt 1
var strStr = function(haystack, needle) {
  // check for invalid input
  if ((haystack === "" && needle === "") || needle == "") {
    console.log("here", { haystack, needle });
    return 0;
  }
  let index = 0;
  let reserveIndex = 1;
  let needleIndex = 0;
  let res = [];
  while (index < haystack.length) {
    if (haystack[index] === needle[needleIndex]) {
      res.push(index);
      index += 1;
      needleIndex += 1;
      if (res.length === needle.length) {
        break;
      }
    } else {
      index = reserveIndex;
      reserveIndex += 1;
      res = [];
      needleIndex = 0;
    }
  }
  console.log(res);
  if (res.length === needle.length && res.length > 0) {
    return res[0];
  }
  return -1;
};
// attempt 2
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    let j, k;
    for (j = 0, k = i; j < needle.length && k < haystack.length; j++, k++) {
      if (haystack[k] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }

  return -1;
};

module.exports = strStr;
