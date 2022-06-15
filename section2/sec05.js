function hello(num, arr) {
  let row = 0,
    col = 0,
    dia1 = 0,
    dia2 = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    row = 0;
    col = 0;

    for (let j = 0; j < num; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }

    dia1 += arr[i][i];
    dia2 += arr[i][num - i - 1];

    max = Math.max(max, col, dia1, dia2);
  }
  return max;
}

console.log(
  hello(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
