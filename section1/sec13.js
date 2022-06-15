function hello(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let s = str[i].charCodeAt();
    if (s > 65 && s < 90) result += str[i].toLowerCase() + "";
    else result += str[i].toUpperCase() + "";
  }

  return result;
}

console.log(hello("StuDY"));
