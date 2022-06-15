function solution(n, arr) {
  let l = 0;
  let r = 0;
  let result = 0;
  let sum = 0;

  for (r = 0; r < arr.length; r++) {
    sum += arr[r];
    while (sum > n) {
      sum -= arr[l];
      l++;
    }
    result += r - l + 1;
  }
  console.log(result);
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
