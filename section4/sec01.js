function hello(num, arr) {
  let result = 0;
  let current = 0;

  for (let i of arr) {
    let num = 0;

    for (let j of String(i)) {
      num += Number(j);
    }

    if (num > current) {
      current = num;
      result = i;
    } else if (num === current) {
      if (i > result) result = i;
    }
  }

  return result;
}

console.log(hello(7, [128, 460, 603, 40, 521, 137, 123]));
