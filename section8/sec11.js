function solution(n) {
  let result = 1;

  function DFS(L) {
    if (L > n) return;
    else {
      result *= L;
      DFS(L + 1);
    }
  }

  DFS(1);

  return result;
}

console.log(solution(5));
