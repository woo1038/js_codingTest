function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) return queue.shift();
  }
}

console.log(solution(8, 3));

// function solution(n, k) {
//   let arr = Array.from({ length: n }, (_, i) => i + 1);
//   let stack = [];
//   let cnt = 1;

//   while (stack.length < n) {
//     if (stack.length === n - 1) {
//       for (let i of arr) {
//         if (i) return i;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       if (cnt % k === 0 && arr[i] !== 0) {
//         stack.push(arr[i]);
//         arr[i] = 0;
//         cnt = 1;
//       } else if (arr[i] !== 0) {
//         cnt++;
//       }
//     }
//   }
// }
