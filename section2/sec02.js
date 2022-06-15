function hello(num, arr) {
  let min = 0;
  let result = 0;

  for (let i of arr) {
    if (min < i) {
      result++;
      min = i;
    }
  }

  return result;
}

console.log(hello(8, [130, 135, 148, 140, 145, 150, 150, 153]));
