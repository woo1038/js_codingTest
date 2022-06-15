function solution(n, arr) {
  let result = 0;
  let cnt = 0;
  let flag = false;

  arr.sort((a, b) => {
    return a[0] / 2 + a[1] - (b[0] / 2 + b[1]);
  });

  for (let i of arr) {
    if (flag) break;

    let value = 0;

    value += i[0];
    value += i[1];

    if (cnt + value <= n) {
      cnt += value;
      result++;
    } else {
      value -= i[0];
      value += i[0] / 2;

      if (cnt + value <= n) {
        cnt += value;
        result++;
      } else {
        flag = true;
        break;
      }
    }
  }
  return result;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
