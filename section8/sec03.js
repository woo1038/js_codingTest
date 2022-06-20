function solution(n) {
  let result = "";

  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      result += v + "";
    }
  }

  DFS(n);

  return result;
}

console.log(solution(1));
