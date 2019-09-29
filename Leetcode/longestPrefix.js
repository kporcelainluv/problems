const longestPrefix = list => {
  if (list.length <= 1) {
    return list.join("");
  }
  const checkWord = list[0];
  let res = "";

  list = list.slice(1, list.length);
  for (let i = 0; i < checkWord.length; i++) {
    const checkLetter = checkWord[i];
    let counter = 0;
    for (word of list) {
      if (checkLetter != word[0] && i === 0) {
        return "";
      }
      if (word[i] === checkLetter) {
        counter += 1;
        if (counter === list.length) {
          res += checkLetter;
        }
      } else {
        counter = 0;
        continue;
      }
    }
  }
  return res;
};

module.exports = longestPrefix;
