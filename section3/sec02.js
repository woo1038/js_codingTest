function hello(str) {
  str = str.replaceAll(" ", "");
  let start = 0;
  let end = str.length - 1;
  let result = "YES";
  const reg = /^[a-zA-Z]*$/;

  while (start < str.length / 2) {
    let str1 = str[start];
    let str2 = str[end];

    if (reg.test(str[start]) || reg.test(str[end])) {
      str1 = str1.toUpperCase();
      str2 = str2.toUpperCase();

      if (str1 !== str2) return "NO";
    }

    start++;
    end--;
  }

  return result;
}

console.log(hello("found7, time: study; Yduts; emitd 7Dnuof"));
