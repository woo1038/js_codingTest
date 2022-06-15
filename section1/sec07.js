function hello(num, arr) {
  let result = 0;

  function helper(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 10 === num) result += 1;
    return helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

console.log(hello(0, [25, 20, 11, 47, 53, 17, 33]));
