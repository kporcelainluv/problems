const targetSearch = (list, target) => {
  const zeroIndex = findListIndex(list, 0);
  let list1 = list.slice(0, zeroIndex);
  let list2 = list.slice(zeroIndex);
  // console.log({ list1, list2 });
  const checkList2 = binarySearch(list1, 4);
};
module.exports = targetSearch;

const findListIndex = (list, num) => {
  return list.findIndex(x => x === num);
};
const binarySearch = (list, target) => {
  let currentNum = 0;
  let currentIndex = 0;
  while (true) {
    let listLength = list.length;
    if (listLength % 2 === 0) {
      currentNum = list[listLength / 2 - 1];
    } else {
      currentNum = list[Math.floor(listLength / 2)];
      currentIndex = Math.floor(listLength / 2);
    }
    if (target > currentNum) {
      list = list.slice(currentIndex + 1);
    } else {
      list = list.slice(0, currentIndex + 1);
    }
    if (list.length === 1) {
      break;
    }
  }
  if (list[0] === target) {
    return true;
  }
  return -1;
};
