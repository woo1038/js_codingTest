function solution(a, b) {
  a.sort();
  b.sort();

  let i = 0;
  let j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    } else if (a[i] > b[j]) {
      j++;
    } else if (a[i] < b[j]) {
      i++;
    }
  }
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
