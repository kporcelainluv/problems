const updateMem = (mem, i, prev) => {
  const nextLength = mem[prev][1] + 1;
  const currentMem = mem[i];
  if (!currentMem || currentMem[1] > nextLength) {
    mem[i] = [prev, nextLength];
  }
};

const solve_ = (prev, i, N, mem) => {
  params.push([i*3, i]);
  params.push([i*2, i]);
  params.push([i+1, i]);

  while (params.length !== 0) {
    const [i_, prev_] = params.pop();

    if (i_ > N) {
      continue;
    }

    updateMem(mem, i, prev);
  }



  // console.log({ mem, N, prev, i });
  solve_(i, i * 3, N, mem);
  solve_(i, i * 2, N, mem);
  solve_(i, i + 1, N, mem);
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
  solve_(1, 2, N, mem);
  solve_(1, 3, N, mem);

  const solution = [];
  buildSolution(mem, N, solution);
  console.log(solution);
};

console.log(solve(96234));
