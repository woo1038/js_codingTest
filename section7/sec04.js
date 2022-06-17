function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = arr[i],
      k;

    for (k = i - 1; k >= 0; k--) {
      if (min < arr[k]) arr[k + 1] = arr[k];
      else break;
    }

    arr[k + 1] = min;
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
