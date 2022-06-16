function solution(n) {
  let result = 0;
  let stack = [];
  let cnt = 0;
  let flag = false;

  for (let i of n) {
    if (i === "(") {
      stack.push("(");
      cnt++;
      flag = true;
    } else if (stack[stack.length - 1] === "(" && i === ")" && flag) {
      stack.pop();
      cnt--;
      result += cnt;
      flag = false;
    } else if (i === ")") {
      stack.pop();
      cnt--;
      result += 1;
    }
  }
  console.log(result);
}

console.log(solution("(((()(()()))(())()))(()())"));
