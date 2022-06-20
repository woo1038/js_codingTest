function solution(n, score, time) {
  let result = Number.MIN_SAFE_INTEGER;

  function DFS(L, total_score, total_time) {
    if (total_time > n) return;
    if (L === score.length) {
      result = Math.max(result, total_score);
    } else {
      DFS(L + 1, total_score + score[L], total_time + time[L]);
      DFS(L + 1, total_score, total_time);
    }
  }

  DFS(0, 0, 0);

  return result;
}

let score = [10, 25, 15, 6, 7];
let time = [5, 12, 8, 3, 4];
console.log(solution(20, score, time));
