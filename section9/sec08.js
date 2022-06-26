function solution(arr) {
  let result = 0;
  let queue = [];

  const len = arr.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function BFS() {
    while (queue.length) {
      let [x, y] = queue.shift();

      for (let j = 0; j < len; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < len && ny >= 0 && ny < len && arr[nx][ny] === 1) {
          arr[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let k = 0; k < len; k++) {
      if (arr[i][k] === 1) {
        arr[i][k] = 0;
        queue.push([i, k]);
        result++;
        BFS();
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
