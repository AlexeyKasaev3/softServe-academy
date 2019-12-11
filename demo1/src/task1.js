import { Validator } from './validator.js'

export function drawChessBoard(boardHeight, boardWidth, symbol) {

  const validationResult = new Validator().validateChessboard(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }

  let returnValue = ''
  for(let i = 0; i < boardHeight; i += 1) {
    returnValue += `${(i & 1 === 1 ? `${symbol}&ensp;` : `&ensp;${symbol}` ).repeat(boardWidth)}<br>`;
  }
  return returnValue
}