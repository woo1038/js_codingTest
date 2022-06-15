function hello(...a) {
  let result = [];
  let answer = 0;
  let min = Infinity;
  for (let i of a) {
    if (i % 2 !== 0) {
      answer += i;
      min = Math.min(min, i);
    }
  }
  result = [answer, min];
  return result;
}

console.log(hello(12, 77, 38, 41, 53, 92, 85));
