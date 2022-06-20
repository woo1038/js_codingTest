function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}
let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
// let arr = [
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ];
console.log(solution(arr));

// function solution(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let cnt = 1;
//     let last = arr[i][1]; // 4
//     for (let k = 0; k < arr.length; k++) {
//       let first = arr[k][0];

//       if (k === i) continue;

//       if (first === last) {
//         cnt++;
//         last = arr[k][1];
//       }
//     }

//     result = Math.max(result, cnt);
//   }

//   return result;
// }
