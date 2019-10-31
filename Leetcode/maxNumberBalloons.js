const maxNumberOfBalloons = text => {
  const baloonDict = {};
  text.split("").forEach(letter => {
    if (letter in baloonDict) {
      baloonDict[letter] += 1;
    } else {
      baloonDict[letter] = 1;
    }
  });
  const filteredBaloonDict = Object.entries(baloonDict)
    .filter(
      elm =>
        elm[0] === "b" ||
        elm[0] === "a" ||
        elm[0] === "l" ||
        elm[0] === "o" ||
        elm[0] === "n"
    )
    .sort((a, b) => a[1] - b[1]);
  if (filteredBaloonDict.length < 5) {
    return 0;
  }
  return Math.floor(Math.min(baloonDict["l"], baloonDict["o"]) / 2);
};
module.exports = maxNumberOfBalloons;
