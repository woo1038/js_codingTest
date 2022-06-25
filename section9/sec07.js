function solution(arr) {
  let result = 0;

  const xlen = arr[0].length;
  const ylen = arr.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x ===  && y === ) return;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < xlen && ny < ylen && arr[nx][ny] === 1) {
          arr[nx][ny] === 0;
          DFS(nx, ny);
        }
      }
    }
    result++;
  }

  DFS(0, 0);

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
