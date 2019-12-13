const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding("utf8");

rl.once("line", line => {
  const money = parseInt(line);
  const res = solve(money);
  console.log(res.length - 1);
  console.log(res.join(" "));
  process.exit();
});
const updateMem = (mem, i, prev) => {
  const nextLength = mem[prev][1] + 1;
  const currentMem = mem[i];
  if (!currentMem || currentMem[1] > nextLength) {
    mem[i] = [prev, nextLength];
  }
};

const solve_ = (curr, prev, N, mem) => {
  const params = [[curr, prev]];
  while (params.length !== 0) {
    const [curr, prev] = params.pop();
    if (curr > N) {
      continue;
    }
    updateMem(mem, curr, prev);

    if (curr + 1 <= N && !mem[curr + 1]) {
      params.push([curr + 1, curr]);
    }
    if (curr * 2 <= N) {
      params.push([curr * 2, curr]);
    }
    if (curr * 3 <= N) {
      params.push([curr * 3, curr]);
    }
  }
};

const buildSolution = (mem, i, solution) => {
  solution.push(i);
  if (mem[i][0] === 1 && mem[i][1] === 1) {
    return;
  }
  buildSolution(mem, mem[i][0], solution);
};

const solve = N => {
  const mem = {
    1: [1, 1]
  };
  solve_(2, 1, N, mem);
  solve_(3, 1, N, mem);

  // console.log(mem);

  const solution = [];
  buildSolution(mem, N, solution);
  return solution.reverse();
};

// console.log(solve(96234));
