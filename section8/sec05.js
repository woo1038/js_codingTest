function solution(arr) {
  let result = "NO";
  let total = arr.reduce((prev, curr) => prev + curr);
  let n = arr.length;
  let flag = false;

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        result = "YES";
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return result;
}

console.log(solution([1, 3, 5, 6, 7, 10]));

// function solution(arr) {
//   const len = arr.length;

//   let result = "NO";
//   let answer = Array.from({ length: len }, () => 0);
//   let flag = 1;

//   function DFS(v) {
//     if (flag === 0) return;

//     if (v === len) {
//       let left = 0;
//       let right = 0;

//       for (let i = 0; i < len; i++) {
//         if (answer[i] === 1) {
//           left += arr[i];
//         } else {
//           right += arr[i];
//         }
//       }

//       if (left === right) {
//         result = "YES";
//         flag = 0;
//       }
//     } else {
//       answer[v] = 1;
//       DFS(v + 1);
//       answer[v] = 0;
//       DFS(v + 1);
//     }
//   }

//   DFS(1);

//   return result;
// }
