function solution(arr) {
  let result = [];

  let temp = [];
  temp.push(arr[0]);
  temp.push(arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (temp[i - 2] < arr[i] && temp[i - 1] > arr[i]) {
      temp.pop();
      temp.push(arr[i]);
    } else if (temp[i - 1] < arr[i]) {
      console.log(1);
    } else {
      continue;
    }
  }
  console.log(temp);

  return result;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
