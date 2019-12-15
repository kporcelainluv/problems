const optimalSequence = n => {
  let hop_count = Array(n + 1).fill(0);
  hop_count[1] = 1;
  for (let i = 2; i <= n + 1; i++) {
    let indices = [i - 1];
    if (i % 2 === 0) {
      indices.push(i / 2);
    }
    if (i % 3 === 0) {
      indices.push(i / 3);
    }
    let k = indices.map(elm => hop_count[elm]);
    let min_hops = Math.min(...k);
    hop_count[i] = min_hops + 1;
  }
  let ptr = n;
  let optimal_seq = [ptr];
  while (ptr > 1) {
    let candidates = [ptr - 1];
    if (ptr % 2 == 0) {
      candidates.push(ptr / 2);
    }
    if (ptr % 3 == 0) {
      candidates.push(ptr / 3);
    }
    let m = candidates.map(c => [c, hop_count[c]]);
    ptr = m.filter(elm => elm[1] < elm[0])[0];
    // ptr = Math.min(
    //   [(c, hop_count[c]) for c in candidates], key=lambda x: x[1])[0]
    optimal_seq.push(ptr);
  }
  return optimal_seq.reverse();
};
console.log(optimalSequence(96234));
