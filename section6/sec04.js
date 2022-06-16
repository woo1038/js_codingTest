function solution(n) {
  let stack = [];

  let num_check = /^[0-9]+$/;
  for (let i of n) {
    if (num_check.test(i)) {
      stack.push(i);
      continue;
    }
    let up = Number(stack.pop());
    let down = Number(stack.pop());
    if (i === "+") {
      stack.push(down + up);
    } else if (i === "-") {
      stack.push(down - up);
    } else if (i === "*") {
      stack.push(down * up);
    } else if (i === "/") {
      stack.push(down / up);
    }
  }

  return stack[0];
}

console.log(solution("352+*9-"));
