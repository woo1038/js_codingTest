function hello(num, arr) {
  let answer = Array.from({ length: num }, () => 1);

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

console.log(hello(5, [87, 92, 92, 100, 76]));
