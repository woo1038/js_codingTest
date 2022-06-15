function solution(n, arr) {
  let r = 0;
  let l = 0;
  let result = 0;
  let sum = 0;

  for (r = 0; r < arr.length; r++) {
    sum += arr[r];
    if (sum === n) result++;
    while (sum >= n) {
      sum -= arr[l];
      l++;
      if (sum === n) result++;
    }
  }

  return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
