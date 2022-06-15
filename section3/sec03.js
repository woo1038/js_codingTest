function hello(str) {
  let result = "";
  const reg = /^[0-9]*$/;

  for (let i of str) {
    if (reg.test(i)) {
      result += i + "";
    }
  }

  return Number(result);
}

console.log(hello("g0en2T0s8eSoft"));
