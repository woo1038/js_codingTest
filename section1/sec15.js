function hello(str) {
  const len = str.length / 2;

  if (str.length % 2 == 0) {
    str = str.slice(len - 1, len + 1);
  } else {
    str = str.slice(len, len + 1);
  }

  return str;
}

console.log(hello("good"));
