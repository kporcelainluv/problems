// add

const addNums = x => {
  function addY(y) {
    return x + y;
  }
  return addY;
};
const a = addNums(5);
// console.log(a(3));

// all

const all = num => {
  function equals(list) {
    return list.every(elem => elem === num);
  }
  return equals;
};
const equals3 = all(3);
console.log(equals3([3, 3, 3, 3, 3]));
