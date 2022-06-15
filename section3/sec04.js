function hello(str, s) {
  let answer1 = "";
  let i = 0;
  let step1 = 0;

  let answer2 = "";
  let j = str.length - 1;
  let step2 = 0;

  let result = "";

  while (i < str.length) {
    // 1
    step1++;
    let value1 = str[i];

    if (value1 === s) {
      step1 = 0;
    }
    answer1 += step1 + "";

    i++;

    // 2
    step2++;
    let value2 = str[j];

    if (value2 === s) {
      step2 = 0;
    }
    answer2 = step2.toString().concat(answer2);

    j--;
  }

  for (let i = 0; i < str.length; i++) {
    let value = Math.min(answer1[i], answer2[i]);
    result += value + "";
  }

  return result;
}

console.log(hello("teachermode", "e"));
