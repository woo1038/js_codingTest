function hello(n, m, arr) {
  let asnwer = Array.from(Array(n), () => Array());
  let result = 0;

  for (let i = 0; i < m; i++) {
    let container = [];

    for (let j = 0; j < n; j++) {
      let val = arr[i][j];
      if (container.length > 0) {
        asnwer[val - 1].push(...container);
      }
      container.push(arr[i][j]);
    }
  }

  for (let i = 0; i < asnwer.length; i++) {
    let obj = {};
    for (let j of asnwer[i]) {
      obj[j] = (obj[j] || 0) + 1;
    }

    for (let k in obj) {
      if (obj[k] === m) {
        result++;
      }
    }
  }

  return result;
}

console.log(
  hello(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
