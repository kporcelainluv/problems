const recordDevisors = (num, record) => {
  if (num <= 1) {
    return record;
  } else if (num % 5 === 0) {
    record.push(5);
    return recordDevisors(num / 5, record);
  } else if (num % 3 === 0) {
    record.push(3);
    return recordDevisors(num / 3, record);
  } else if (num % 2 === 0) {
    record.push(2);
    return recordDevisors(num / 2, record);
  } else {
    record.push(num);
    return record;
  }
};

const ugly = num => {
  if (num < 1) {
    return false;
  }
  let res = [];
  let flag = true;
  res = recordDevisors(num, res);
  for (let i of res) {
    if (i != 2 && i != 3 && i != 5) {
      flag = false;
      break;
    }
  }
  return flag;
};
module.exports = ugly;
