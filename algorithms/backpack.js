const backpack = list => {
  let res = 0;
  let currentWeight = 0;

  const [amount, maxWeight] = list[0];
  list = list.slice(1, list.length);
  const pricePerUnitList = list
    .reduce((acc, elm) => {
      acc = [...acc, [elm[0] / elm[1], elm[1]]];
      return acc;
    }, [])
    .sort((a, b) => {
      return a[0] < b[0];
    })
    .slice(0, amount);
  console.log(pricePerUnitList);
  for (let unit of pricePerUnitList) {
    let [pricePerKg, weight] = unit;
    while (weight > 0 && currentWeight < maxWeight) {
      res += pricePerKg;
      weight -= 1;
      currentWeight += 1;
    }
  }
  return res;
};

module.exports = backpack;
