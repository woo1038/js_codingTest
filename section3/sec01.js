function hello(str) {
  let start = 0;
  let end = str.length - 1;
  let result = "YES";

  while (start < str.length / 2) {
    let str1 = str[start].toUpperCase();
    let str2 = str[end].toUpperCase();

    if (str1 !== str2) return "NO";

    start++;
    end--;
  }

  return result;
}

console.log(hello("gooog"));
