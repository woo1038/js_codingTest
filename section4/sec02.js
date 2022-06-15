function world(num) {
  let ha = Math.floor(num / 2);
  for (let i = 2; i < ha; i++) {
    let value = num / i;
    if (Number.isInteger(value)) {
      return false;
    }
  }
  return true;
}

function hello(num, arr) {
  let result = "";
  for (let i of arr) {
    let reverseNum = Number(i.toString().split("").reverse().join(""));
    if (reverseNum < 2) continue;
    if (reverseNum === 2) {
      result += reverseNum + " ";
      continue;
    }
    const value = world(reverseNum);
    if (value) {
      result += reverseNum + " ";
    }
  }

  return result;
}

console.log(hello(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
// console.log(hello(9, [55]));
