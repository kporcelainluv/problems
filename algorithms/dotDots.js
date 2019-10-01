const intervals = [[[1, 3], [2, 5], [3, 6]]];

const doesBelong = (point, interval) =>
  point >= interval[0] && point <= interval[1];

const getWeight = (point, intervals) => {
  let res = 0;
  for (let intr of intervals) {
    if (doesBelong(point, intr)) {
      res += 1;
    }
  }
  return res;
};

const getPoints = intervals => {
  const points = new Set();

  for (const intr of intervals) {
    for (let x = intr[0]; x <= intr[1]; x++) {
      points.add(x);
    }
  }

  const pointsArr = Array.from(points)
    .map(p => ({ point: p, weight: getWeight(p, intervals) }))
    .sort(({ weight: weight1 }, { weight: weight2 }) => weight1 - weight2)
    .map(({ point }) => point);

  return pointsArr;
};

const hasCoverage = (points, intervals) => {
  const coverage = new Array(intervals.length).fill(false);

  for (let p of points) {
    for (let i = 0; i < intervals.length; i++) {
      if (coverage[i]) {
        continue;
      }
      let intr = intervals[i];
      if (doesBelong(p, intr)) {
        coverage[i] = true;
      }
    }
  }

  return coverage.every(x => x);
};

const removeIndex = (arr, i) => [...arr.slice(0, i), ...arr.slice(i + 1)];

const getRes = intervals => {
  let points = getPoints(intervals);
  let len = points.length;

  for (let i = 0, indexToRemove = 0; i < len; ++i) {
    const possiblePoints = removeIndex(points, indexToRemove);
    if (hasCoverage(possiblePoints, intervals)) {
      points = possiblePoints;
    } else {
      indexToRemove += 1;
    }
  }

  return points;
};

intervals.forEach(intr => {
  console.log(intr);
  console.log("here");
  console.log(getRes(intr));
});
