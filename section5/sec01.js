function solution(a, b) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else if (a[i] == b[j]) {
      result.push(a[i]);
      result.push(b[j]);
      i++;
      j++;
    } else if (a[i] > b[j]) {
      result.push(b[j]);
      j++;
    }
  }

  if (i === a.length) {
    result = [...result, ...b.slice(j)];
  } else if (j === b.length) {
    result = [...result, ...a.slice(i)];
  }

  return result;
}

let a = [1, 3, 5, 7, 9, 11, 111];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
