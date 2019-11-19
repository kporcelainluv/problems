const differentSummands = n => {
  const summands = [];
  let index = 1;
  let candiesAmount = n;
  while (candiesAmount > 0) {
    if (candiesAmount - index >= 0 && candiesAmount - index + 1 >= 0) {
      summands.push(index);
      candiesAmount -= index;
    }
    if (candiesAmount - index + 1 <= 0 && candiesAmount > 0) {
      summands.pop();
      candiesAmount += index;
    }
    index++;

    console.log({ summands, candiesAmount, index });
  }
};
differentSummands(14);
