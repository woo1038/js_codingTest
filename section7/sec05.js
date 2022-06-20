function solution(n, arr) {
  let result = Array.from({ length: n }, () => 0);

  for (let c of arr) {
    let idx = result.indexOf(c);
    if (idx !== -1) {
      for (let i = idx; i > 0; i--) {
        [result[i], result[i - 1]] = [result[i - 1], result[i]];
      }
    } else {
      result.unshift(c);
      result.pop();
    }
  }
  return result;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
