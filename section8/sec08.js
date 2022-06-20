function solution(a, b) {
  let result = [];
  let temp = Array.from({ length: b }, () => 0);

  function DFS(L) {
    if (L === b) result.push(temp.slice());
    else {
      for (let i = 1; i <= a; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return result;
}

console.log(solution(3, 2));
