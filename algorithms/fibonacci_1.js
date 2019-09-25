const fib = num => {
  let res = [0, 1];
  for (let i = 1; i < num; i++) {
    res = [...res, res[i - 1] + res[i]];
  }
  return res[res.length - 1];
};

module.exports = fib;
// stepik

var stdin = process.openStdin();
stdin.on("data", function(data) {
  var n = parseInt(data.toString().split(" "));
  let res = [0, 1];
  for (let i = 1; i < num; i++) {
    res = [...res, res[i - 1] + res[i]];
  }
  // console.log(res[res.length - 1]);
});
