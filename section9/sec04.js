function solution(graph) {
  let result = 0;

  dx = [1, 0, -1, 0];
  dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === 6 && y === 6) result++;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= 7 || ny >= 7) continue;

        if (graph[nx][ny] === 0) {
          graph[nx][ny] = 1;
          DFS(nx, ny);
          graph[nx][ny] = 0;
        }
      }
    }
  }
  graph[0][0] = 1;
  DFS(0, 0);

  return result;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
