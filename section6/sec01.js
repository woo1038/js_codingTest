function solution(s) {
  let result = [];
  for (let i of s) {
    if (i === "(") {
      result.push("(");
    } else if (i === ")" && result.length !== 0) {
      result.pop();
    } else if (i === ")" && result.length === 0) {
      result.push(")");
    } else {
      result.pop();
    }
  }
  return result.length > 0 ? "NO" : "YES";
}

console.log(solution("(()(()))(()))"));
