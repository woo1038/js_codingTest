function hello(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    let num = str[i].charCodeAt();
    if (num > 65 && num < 90) result += 1;
  }

  return result;
}

console.log(hello("KoreaTimeGood"));
