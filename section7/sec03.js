function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > 0 && arr[k + 1] < 0)
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
    }
  }
  return arr;
}

console.log(solution([1, 2, 5, -3, -2, 3, 6, -6]));
