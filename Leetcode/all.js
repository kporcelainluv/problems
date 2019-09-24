function all(f) {
  const innerF = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (!f(arr[i])) {
        return false;
      }
    }
    return true;
  };

  return innerF;
}
module.exports = all;
