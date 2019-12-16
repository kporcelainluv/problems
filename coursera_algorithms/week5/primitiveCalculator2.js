const optimalSequence = n => {
  let hop_count = Array(n + 1).fill([0]);
  hop_count[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    let indices = [i - 1];
    if (i % 2 === 0) {
      indices.push(Math.round(i / 2));
    }
    if (i % 3 === 0) {
      indices.push(Math.round(i / 3));
    }
    let k = indices.map(elm => hop_count[elm]);
    let min_hops = Math.min(...k);
    hop_count[i] = min_hops + 1;
  }
  let ptr = n;
  let optimal_seq = [ptr];
  while (ptr >= 1) {
    let candidates = [ptr - 1];
    if (ptr % 2 === 0) {
      candidates.push(Math.round(ptr / 2));
    }
    if (ptr % 3 === 0) {
      candidates.push(Math.round(ptr / 3));
    }
    let m = candidates.map(c => [c, hop_count[c]]);
    // console.log({ m });
    let k = m.map(elm => elm[1]);
    ptr = Math.min(...k)[0];
    console.log({ k });
    optimal_seq.push(ptr);
    //   ptr = min(
    //     [(c, hop_count[c]) for c in candidates],
    //   key=lambda x: x[1]
    // )[0]
    //   optimal_seq.append(ptr)
  }
  return optimal_seq.reverse();
};
console.log(optimalSequence(96234));
