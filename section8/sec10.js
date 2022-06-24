function solution(n, arr) {
  let result = [];
  let temp = Array.from({ length: n }, () => 0);
  let check = Array.from({ length: arr.length }, () => 0);

  function DFS(L) {
    if (L === n) result.push(temp.slice());
    else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return result;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
