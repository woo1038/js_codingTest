function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
