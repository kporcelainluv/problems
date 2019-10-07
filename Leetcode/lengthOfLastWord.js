const lengthOfLastWord = s => {
  const p = s.split(" ").filter(elm => elm !== "");
  let res = p[p.length - 1];
  if (res) {
    return res.length;
  }
  return 0;
};
module.exports = lengthOfLastWord;
