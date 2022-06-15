function solution(n, arr) {
  let result = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    result += arr[i];
  }

  temp = result;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    result = Math.max(result, temp);
  }

  return result;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
