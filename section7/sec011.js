function count(arr, mid) {
  let cnt = 0;
  let answer = 0;

  for (let i of arr) {
    cnt += i;
    if (cnt > mid) {
      answer++;
      cnt = i;
    }
  }

  if (cnt <= mid) {
    answer++;
  }

  return answer;
}

function solution(n, arr) {
  let result = 0;
  let left = Math.max(...arr);
  let right = arr.reduce((prev, curr) => prev + curr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    let answer = count(arr, mid);
    if (answer <= n) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
