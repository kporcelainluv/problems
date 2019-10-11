const climbingStair = num => {
  if (num === 0 || num === 1 || num === 2) {
    return num;
  }

  let step1 = 1;
  let step2 = 2;
  for (let i = 2; i < num; i++) {
    let transition = step1;
    step1 = step2;
    step2 += transition;
  }
  return step2;
};

module.exports = climbingStair;
