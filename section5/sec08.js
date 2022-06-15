function make(name, val) {
  if (name.has(val)) name.set(val, name.get(val) + 1);
  else name.set(val, 1);
}

function compare(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map2) {
    if (!map1.has(key) || map1.get(key) === 0) return false;
  }
  return true;
}

function solution(a, b) {
  let x = new Map();
  let y = new Map();
  let result = 0;
  const a_len = a.length;
  const b_len = b.length - 1;

  for (let i of b) {
    make(y, i);
  }

  for (let i = 0; i < b_len; i++) {
    make(x, a[i]);
  }

  let l = 0;
  for (let r = b_len; r < a_len; r++) {
    make(x, a[r]);
    if (compare(x, y)) result++;
    x.set(a[l], x.get(a[l]) - 1);
    if (x.get(a[l]) === 0) x.delete(a[l]);
    l++;
  }
  return result;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
// function solution(a, b) {
//   let temp = {};
//   let stand = {};
//   let result = 0;

//   for (let i = 0; i < b.length; i++) {
//     let value = a[i];
//     let value2 = b[i];
//     temp[value] = (temp[value] || 0) + 1;
//     stand[value2] = (stand[value2] || 0) + 1;
//   }

//   let flag1 = true;
//   for (let k in stand) {
//     if (temp[k] !== stand[k]) {
//       flag1 = false;
//     }
//   }
//   if (flag1) result++;

//   for (let i = b.length; i < a.length; i++) {
//     let flag = true;
//     let value = a[i];

//     temp[a[i - b.length]] = temp[a[i - b.length]] - 1;
//     temp[value] = (temp[value] || 0) + 1;

//     for (let k in stand) {
//       if (temp[k] !== stand[k]) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) result++;
//   }

//   return result;
// }
