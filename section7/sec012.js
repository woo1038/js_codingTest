function count(arr, mid) {
  let cnt = 1;
  let end = arr[0];

  for (let i of arr) {
    if (i - end >= mid) {
      end = i;
      cnt++;
    }
  }

  return cnt;
}

function solution(n, arr) {
  arr.sort((a, b) => a - b);

  let result = 0;
  let left = arr[0];
  let right = arr[arr.length - 1];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    let answer = count(arr, mid);
    if (answer >= n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
