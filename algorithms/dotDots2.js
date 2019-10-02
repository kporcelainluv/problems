const dotDots2 = dots => {
  dots = dots.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  let res = [dots[0]];
  let index = 0;
  for (let i = 1; i < dots.length; i++) {
    if (res[index][1] < dots[i][0]) {
      res.push(dots[i]);
      index += 1;
    }
  }

  const dotsRes = res.map(elm => elm[1]).join(" ");
  console.log(res.length);
  console.log(dotsRes);
};

dotDots2([[1, 10], [3, 8], [2, 9], [4, 7], [5, 6]]);
dotDots2([[4, 7], [1, 3], [2, 5], [5, 6]]);
dotDots2([[3, 6], [1, 3], [2, 5]]);
