function solution(n) {
  let result = [];
  let arr = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 1) temp += i + "";
      }
      if (temp.length > 0) result.push(temp.trim());
    } else {
      arr[v] = 1;
      DFS(v + 1);
      arr[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return result;
}

console.log(solution(3));
