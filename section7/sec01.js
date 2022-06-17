function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[idx] > arr[k]) {
        idx = k;
      }
    }

    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
