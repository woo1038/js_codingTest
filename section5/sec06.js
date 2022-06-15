function solution(s) {
  let obj = new Map();
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  for (let i of s) {
    if (obj.has(i)) obj.set(i, obj.get(i) + 1);
    else obj.set(i, 1);
  }

  for (let [key, val] of obj) {
    if (val > max) {
      max = val;
      result = key;
    }
  }
  return result;
}

// function solution(s) {
//   let obj = {};
//   let val = 0;
//   let result = "";

//   for (let i = 0; i < s.length; i++) {
//     let value = s[i];
//     obj[value] = (obj[value] || 0) + 1;
//   }

//   for (let i in obj) {
//     if (obj[i] > val) {
//       result = i;
//       val = obj[i];
//     }
//   }

//   return result;
// }

let str = "BACBACCACCBEEDDDDD";
console.log(solution(str));
