function solution(arr) {
  let result = 0;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const len = arr.length;

  function DFS(x, y) {
    arr[x][y] = 0;

    for (let j = 0; j < 8; j++) {
      let nx = x + dx[j];
      let ny = y + dy[j];

      if (nx >= 0 && nx < len && ny >= 0 && ny < len && arr[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len; k++) {
      if (arr[i][k] === 1) {
        result++;
        DFS(i, k);
      }
    }
  }

  return result;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
