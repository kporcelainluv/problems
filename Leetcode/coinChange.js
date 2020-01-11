const change = amount => {
  if (amount === 24) {
    return [5, 5, 7, 7];
  }
  if (amount === 25) {
    return [5, 5, 5, 5, 5];
  }
  if (amount === 26) {
    return [5, 7, 7, 7];
  }
  if (amount === 27) {
    return [5, 5, 5, 5, 7];
  }
  if (amount === 28) {
    return [7, 7, 7, 7];
  }
  if (amount === 49) {
    return [7, 7, 7, 7, 7, 7, 7];
  }

  const coins = change(amount - 5);
  coins.push(5);
  return coins;
};

console.log(change(45));
