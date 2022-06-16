function solution(s) {
  let result = "";
  let stack = [];

  for (let i of s) {
    if (i === "(") {
      stack.push(i);
      continue;
    } else if (i === ")") {
      stack.pop();
      continue;
    }

    if (stack.length === 0) {
      result += i;
    }
  }

  return result;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
