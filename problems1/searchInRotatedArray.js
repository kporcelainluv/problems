const search = (list, target) => {
  if (list.length === 0) {
    return -1;
  }
  const zeroIndex = searchSmallestBinary(list);
  const list1res = binarySearch(list, target, 0, zeroIndex);
  const list2res = binarySearch(list, target, zeroIndex, list.length - 1);
  console.log({ zeroIndex, list1res, list2res });
  if (list1res === -1 && list2res === -1) {
    return -1;
  } else if (list2res === -1 && list1res !== -1) {
    return list1res;
  } else {
    return list2res;
  }
};

const searchSmallestBinary = list => {
  let start = 0;
  let finish = list.length - 1;
  while (start < finish) {
    let mid = start + Math.floor((finish - start) / 2);
    if (list[mid] > list[finish]) {
      start = mid + 1;
    } else {
      finish = mid;
    }
  }

  return start;
};

const binarySearch = (list, target, start, finish) => {
  let currentNum;
  let currentIndex;
  let listLength;

  while (true) {
    listLength = finish - start + 1;
    if (listLength === 1) {
      break;
    }

    currentIndex =
      start +
      (listLength % 2 === 0 ? listLength / 2 - 1 : Math.floor(listLength / 2));
    currentNum = list[currentIndex];

    if (target > currentNum) {
      start = currentIndex + 1;
    } else {
      finish = currentIndex;
    }
  }
  if (list[start] === target) {
    return start;
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
