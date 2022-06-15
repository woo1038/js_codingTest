function hello(str, s) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) result += 1;
  }

  return result;
}

console.log(hello("COMPUTERPROGRAMMING", "R"));
