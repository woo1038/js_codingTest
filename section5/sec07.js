function solution(a, b) {
  let obj = new Map();
  let result = "YES";

  for (let i of a) {
    if (obj.has(i)) obj.set(i, obj.get(i) + 1);
    else obj.set(i, 1);
  }

  for (let x of b) {
    if (!obj.has(x) || obj.get(x) === 0) return "NO";
    obj.set(x, obj.get(x) - 1);
  }

  return result;
}
// function solution(a, b) {
//   let obj = {};
//   let result = "YES";

//   for (let i = 0; i < a.length; i++) {
//     let value = a[i];
//     obj[value] = (obj[value] || 0) + 1;
//   }

//   for (let i = 0; i < b.length; i++) {
//     let value = b[i];

//     if (!obj[value]) {
//       result = "NO";
//       break;
//     }

//     obj[value] = obj[value] - 1;
//   }

//   return result;
// }

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
