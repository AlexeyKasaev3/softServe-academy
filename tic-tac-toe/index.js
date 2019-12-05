function isSolved(board) {
  for (let i = 0; i <= 2; i++) {
      if (
          board[0][i] === board[1][i] &&
          board[0][i] === board[2][i] &&
          board[0][i] !== 0
      ) {
          return board[0][i];
      }
      if (
          board[i][0] === board[i][1] &&
          board[i][0] === board[i][2] &&
          board[i][0] !== 0
      ) {
          return board[i][0];
      }
  }
  if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== 0
  ) {
      return board[0][0];
  }
  if (
      board[2][0] === board[1][1] &&
      board[2][0] === board[0][2] &&
      board[2][0] !== 0
  ) {
      return board[2][0];
  }
  for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
          if (board[i][j] === 0) {
              return -1;
          }
      }
  }
  return 0;
}

const board1 = [[0, 0, 1], [0, 1, 2], [2, 1, 0]];
console.log(isSolved(board1) === -1);

const board2 = [[0, 0, 1], [0, 1, 1], [2, 1, 1]];
console.log(isSolved(board2) === 1);

const board3 = [[2, 0, 1], [0, 2, 2], [2, 1, 2]];
console.log(isSolved(board3) === 2);

const board4 = [[2, 2, 1], [1, 1, 2], [2, 1, 1]];
console.log(isSolved(board4) === 0);