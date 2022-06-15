function hello(str) {
  let result = "";
  let i = 1;
  str = str + " ";

  for (let k = 0; k < str.length - 1; k++) {
    if (str[k] === str[k + 1]) i++;
    else {
      result += str[k];
      if (i > 1) result += String(i);
      i = 1;
    }
  }

  return result;
}

console.log(hello("KKHSSSSSSSE"));
