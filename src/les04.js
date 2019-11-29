///////////////////////////////////////////////////
console.log('--- Find a Chair---')
///////////////////////////////////////////////////

function meeting(rooms, need) {
  if (!need) return 'Game On';

  const numberOfRooms = rooms.length;
  const borrowedChairs = [];
  for (let i = 0; i < numberOfRooms; i += 1) {
      const freeChairs = rooms[i][1] - rooms[i][0].length;
      if (freeChairs > 0) {
          if (need > freeChairs) {
              need -= freeChairs;
              borrowedChairs.push(freeChairs);
          } else if (need === freeChairs) {
              borrowedChairs.push(freeChairs);
              return borrowedChairs;
          } else if (need < freeChairs) {
              borrowedChairs.push(need);
              return borrowedChairs;
          }
      } else {
          borrowedChairs.push(0);
      }
  }
  return 'Not enough!';
}

console.log(
  meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) /* [0, 1, 3] */
);
console.log(
  meeting(
      [
          ['XXX', 1],
          ['XXXXXX', 6],
          ['X', 2],
          ['XXXXXX', 8],
          ['X', 3],
          ['XXX', 1]
      ],
      5
  ) /* [0, 0, 1, 2, 2] */
);
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) === 'Game On');


///////////////////////////////////////////////////
console.log('--- Next Version---')
///////////////////////////////////////////////////

function nextVersion(currentVersion) {
  let data = currentVersion.split('.');
  for (let i = data.length - 1; i >= 0; i -= 1) {
      const nextVersion = Number(data[i]) + 1;
      if (nextVersion === 10 && i !== 0) {
          data[i] = 0;
      } else {
          data[i] = nextVersion;
          return data.join('.');
      }
  }
}

console.log(nextVersion('1.2.3') === '1.2.4');
console.log(nextVersion('0.9.9') === '1.0.0');
console.log(nextVersion('1') === '2');
console.log(nextVersion('1.2.3.4.5.6.7.8') === '1.2.3.4.5.6.7.9');
console.log(nextVersion('9.9') === '10.0');

///////////////////////////////////////////////////
console.log('--- Tic-Tac-Toe Checker---')
///////////////////////////////////////////////////

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


///////////////////////////////////////////////////
console.log('--- Battle ships---')
///////////////////////////////////////////////////

const board = [
  [0, 0, 0, 2, 2, 0],
  [0, 3, 0, 0, 0, 0],
  [0, 3, 0, 1, 0, 0],
  [0, 3, 0, 1, 0, 0]
];
const attacks = [[2, 1], [1, 3], [4, 2]];

function damagedOrSunk(board, attacks) {
  const boatsBeforeAttack = parseBoats(board);
  const boardAFterAttack = performAttack(board, attacks);
  const boatsAfterAttack = parseBoats(boardAFterAttack);
  const gameResults = getGameResults(boatsBeforeAttack, boatsAfterAttack);
  return gameResults;

  function parseBoats(board) {
      let boats = {};
      board.forEach(boardLine => {
          boardLine.forEach(boardCell => {
              if (boardCell !== 0) {
                  if (!boats[boardCell]) {
                      boats[boardCell] = 1;
                  } else {
                      boats[boardCell] += 1;
                  }
              }
          });
      });
      return boats;
  }

  function performAttack(board, attacks) {
      let boardAfterAttack = [].concat(board);
      const boardY = board.length - 1;
      attacks.forEach(attack => {
          const [attacXOnBoard, attacYOnBoard] = [
              attack[0] - 1,
              boardY - (attack[1] - 1)
          ];
          boardAfterAttack[attacYOnBoard][attacXOnBoard] = 0;
      });
      return boardAfterAttack;
  }

  function getGameResults(boatsBeforeAttack, boatsAfterAttack) {
      let gameResults = {
          sunk: 0,
          damaged: 0,
          notTouched: 0,
          points: 0
      };
      Object.keys(boatsBeforeAttack).forEach(key => {
          if (!boatsAfterAttack[key]) {
              gameResults.sunk += 1;
              gameResults.points += 1;
          } else if (boatsBeforeAttack[key] === boatsAfterAttack[key]) {
              gameResults.notTouched += 1;
              gameResults.points -= 1;
          } else {
              gameResults.damaged += 1;
              gameResults.points += 0.5;
          }
      });
      return gameResults;
  }
}

console.log(damagedOrSunk(board, attacks));
//{ sunk: 0, damaged: 2 , notTouched: 1, points: 0 }