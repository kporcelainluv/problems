const createObject = word => {
  const res = {};
  for (let i of word) {
    if (i in res) {
      res[i] += 1;
    } else {
      res[i] = 1;
    }
  }
  return res;
};

const sortedArrs = arrs => {
  return arrs.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });
};

const anagram = (w1, w2) => {
  const firstWord = sortedArrs(Object.entries(createObject(w1)));
  const secondWord = sortedArrs(Object.entries(createObject(w2)));

  return JSON.stringify(firstWord) === JSON.stringify(secondWord);
};
module.exports = anagram;
