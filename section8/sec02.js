function solution(n) {
  if (n === 1) return 1;
  return `${solution(parseInt(n / 2))} ${n % 2}`;
}

console.log(solution(23));
