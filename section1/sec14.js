function hello(num, arr) {
  let result = "";

  function helper(arr) {
    if (arr.length === 0) return;
    if (arr[0].length > result.length) result = arr[0];
    return helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

console.log(hello(5, ["teacher", "time", "student", "beautiful", "good"]));
