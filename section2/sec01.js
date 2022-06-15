function hello(num, arr) {
  let min = 0;
  let result = [];
  for (let i of arr) {
    if (min < i) result.push(i);
    min = i;
  }

  return result;
}

console.log(hello(6, [7, 3, 9, 5, 6, 12]));
