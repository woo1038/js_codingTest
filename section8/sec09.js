function solution(n, arr) {
  let result = Infinity;

  function DFS(L, sum) {
    if (sum > n) return;
    if (L >= result) return;
    if (sum === n) {
      result = Math.min(result, L);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);

  return result;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
