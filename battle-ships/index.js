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