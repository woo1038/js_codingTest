function hello(n, arr) {
  let result = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;

      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

        if (arr[i][j] < arr[nx][ny]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        result++;
      }
    }
  }
  return result;
}

console.log(
  hello(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 10, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
