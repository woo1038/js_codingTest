function hello(a) {
  if (a === 0) return a;
  return a + hello(a - 1);
}

console.log(hello(10));
