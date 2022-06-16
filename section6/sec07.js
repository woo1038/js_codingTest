function solution(s, str) {
  let queue = [...str];
  let x = 0;

  for (let i of queue) {
    if (i == s[x]) {
      x++;
    }
  }

  if (x >= s.length) {
    return "YES";
  } else {
    return "No";
  }
}

console.log(solution("CAB", "CBDAGE"));
