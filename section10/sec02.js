function solution(n) {
  let result = 0;

  let arr = Array.from({ length: n + 2 }, () => 0);

  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  result = arr[n + 1];

  return result;
}

console.log(solution(7));
