function hello(num, arr) {
  let prev = 0;
  let result = 0;

  for (let i of arr) {
    if (i === 1) {
      result += i + prev;
      prev++;
    } else {
      prev = 0;
    }
  }
  return result;
}

console.log(hello(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
