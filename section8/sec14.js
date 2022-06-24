function solution(n, r) {
  let result = [];
  let temp = Array.from({ length: r }, () => 0);

  function DFS(L, s) {
    if (L === r) {
      result.push(temp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return result;
}

console.log(solution(4, 2));
