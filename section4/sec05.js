function solution(n, k, arr) {
  let result = [];
  arr.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let value = arr[i] + arr[j] + arr[k];
        result.push(value);
      }
    }
  }

  return result[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
