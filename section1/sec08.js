function hello(arr) {
  let sum = arr.reduce((prev, curr) => prev + curr);
  let answer = [];
  let flag = false;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return arr;
}

console.log(hello([20, 7, 23, 19, 10, 15, 25, 8, 13]));
