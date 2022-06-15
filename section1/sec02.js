function hello(a, b, c) {
  const maxNum = Math.max(a, b, c);
  return a + b + c - maxNum - maxNum > 0 ? "YES" : "NO";
}

console.log(hello(13, 33, 17));
