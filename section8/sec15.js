function solution(n, arr, m) {
  let result = 0;

  function DFS(L, s, sum) {
    if (L === n) {
      if (sum % m === 0) result++;
    } else {
      for (let i = s; i < arr.length; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return result;
}

console.log(solution(3, [2, 4, 5, 8, 12], 6));
