const check = (list, index) => {
  if (index === list.length) {
    return list;
  } else {
    if (list[index] === list[index - 1]) {
      list.splice(index, 1);
      return check(list, index);
    } else {
      return check(list, (index += 1));
    }
  }
};

const removeDuplicates = list => {
  const res = check(list, 1);
  return res;
};

// const removeDuplicates = list => {
//   counter = 1;
//   while (counter < mylist.length) {
//     if (mylist[counter] === mylist[counter - 1]) {
//       mylist.splice(counter, 1);
//     }
//     counter += 1;
//   }
//   return mylist.length;
// };

module.exports = removeDuplicates;
