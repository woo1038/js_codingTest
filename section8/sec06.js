function solution(n, arr) {
  let result = 0;
  const len = arr.length;

  function DFS(L, sum) {
    if (sum > n) return;
    if (L === len) {
      result = Math.max(result, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return result;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
