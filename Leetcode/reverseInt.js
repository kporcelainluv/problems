const reverse = function(x) {
  if (x === 0) {
    return 0;
  }

  let strInput = x.toString().split("");
  let res = [];
  if (strInput[0] === "-") {
    res.push(strInput[0]);
    strInput = strInput.slice(1, strInput.length);
  }
  return parseInt(
    strInput
      .filter((elm, index, arr) => {
        if (elm != 0) {
          return elm;
        } else {
          if (arr[index - 1] > 0 && arr[index + 1] > 0) {
            return elm;
          }
          return false;
        }
      })
      .reduceRight((acc, b) => {
        return [...acc, b];
      }, res)
      .join("")
  );
};
module.exports = reverse;
