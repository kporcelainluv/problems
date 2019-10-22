var rob = function(nums) {
  let res = 0;
  nums.forEach((element, index) => {
    if (index === 0) {
      res += element;
    } else if (index % 2 === 0) {
      res += element;
    }
  });
  return res;
};

module.exports = rob;
