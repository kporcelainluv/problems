const convertToBits = n => {
  let res = [];
  for (let i = 0; i < 32; i++) {
    if (n % 2 > 0) {
      res = [...res, "1"];
    } else {
      res = [...res, "0"];
    }
    n = Math.floor(n / 2);
  }

  return res.join("");
};

const bitsToNum = n => {
  let res = 0;
  let j = 0;
  let i = n.length - 1;
  for (i = n.length - 1, j = 0; i >= 0, j < n.length; i--, j++) {
    res += 2 ** i * n[j];
  }
  return res;
};
var reverseBits = function(n) {
  const bits = convertToBits(n);
  let num = bitsToNum(bits);
  return num;
};

console.log(reverseBits(4294967293));
