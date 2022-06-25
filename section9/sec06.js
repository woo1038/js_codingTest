function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  let L = 0;
  queue.push(s);
  ch[s] = 1;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let v = queue.shift();

      for (let nv of [v - 1, v + 1, v + 5]) {
        if (nv === e) return L + 1;
        if (nv > 0 && nv < 10000 && ch[nv] === 0) {
          ch[nv] = 1;
          queue.push(nv);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));

/* function solution(s, e) {
  let result = 0;
  let queue = [];
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);

  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return result;
} */
