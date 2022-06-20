function solution(arr) {
  let result = 0;
  let cnt = 0;

  let real_time = [];
  for (let i of arr) {
    real_time.push([i[0], "S"]);
    real_time.push([i[1], "E"]);
  }

  real_time.sort((a, b) =>
    a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]
  );

  for (let time of real_time) {
    if (time[1] === "S") {
      cnt++;
    } else {
      cnt--;
    }
    result = Math.max(result, cnt);
  }

  return result;
}
// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];
let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));

// function solution(arr) {
//   let result = 0;

//   arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

//   for (let i = 0; i < arr.length - 1; i++) {
//     let cnt = 1;
//     for (let k = i + 1; k < arr.length; k++) {
//       console.log(arr[i][1], arr[k][0], arr[i][1] > arr[k][0], cnt);
//       if (arr[i][1] > arr[k][0]) cnt++;
//       else break;
//     }

//     result = Math.max(result, cnt);
//   }

//   return result;
// }
