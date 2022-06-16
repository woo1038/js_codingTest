function solution(board, moves) {
  let stack = [];
  let result = 0;

  for (let i of moves) {
    for (let k = 0; k < board.length; k++) {
      if (board[k][i - 1] === 0) continue;
      else if (board[k][i - 1] === stack[stack.length - 1]) {
        board[k][i - 1] = 0;
        stack.pop();
        result += 2;
        break;
      } else {
        stack.push(board[k][i - 1]);
        board[k][i - 1] = 0;
        break;
      }
    }
  }
  return result
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
