import { Validator } from './validator.js'

export function getNumericalSequence(sequenceLength, minimalSquareRoot) {

  const validationResult = new Validator().validateNumericalSequence(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }

  let startNum = Math.ceil(Math.sqrt(minimalSquareRoot))
  let returnValue = startNum.toString()
  for (let i =  1; i < sequenceLength; i += 1) {
    returnValue += `, ${startNum += 1}`
  }
  return returnValue
}

//console.log(getNumericalSequence(12, 9))