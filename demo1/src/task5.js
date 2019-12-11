import { Validator } from './validator.js'

export function getHappyTickets(context) {

  const validationResult = new Validator().validateHappyTickets(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }


  const numericMin = Number(context.min)
  const numericMax = Number(context.max)

  const returnValue = {
    winner: '',
    simple: 0,
    hard: 0
  }
  let ticket = context.min
  for(let i = numericMin; i <= numericMax; i += 1) {
    if(Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]) === Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5])) {
      returnValue.simple += 1
    }
    if(Number(ticket[0]) + Number(ticket[2]) + Number(ticket[4]) === Number(ticket[1]) + Number(ticket[3]) + Number(ticket[5])) {
      returnValue.hard += 1
    }
    ticket = i + 1 < 100000 ? '0'.repeat((6 - (i + 1).toString().length)) + (i + 1) : (i + 1).toString()
  } 

  if (returnValue.simple !== returnValue.hard) {
    returnValue.simple > returnValue.hard ? returnValue.winner = 'simple' : returnValue.winner = 'hard'
  } else {
    returnValue.winner = 'equal'
  }

  return returnValue
}

//console.log(getHappyTickets({min: '000000', max: '999999'}))