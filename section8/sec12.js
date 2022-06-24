function solution(n, r) {
  let dy = Array.from(Array(35), () => Array(n).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  let result = DFS(n, r);

  return result;
}

console.log(solution(33, 19));
