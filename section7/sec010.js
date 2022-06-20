function solution(n, arr) {
  let result = 0;
  let left = 0;
  let right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left <= right) {
    let mid = parseInt((right + left) / 2);
    if (n === arr[mid]) {
      result = mid;

      break;
    } else if (n < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
