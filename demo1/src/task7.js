import { Validator } from './validator.js'

export function getFibonacciRange(range) {

  const validationResult = new Validator().validateFibonacci(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }

  if (range.length !== undefined) {
    range.min = Number(range.length > 1 ? `1${"0".repeat(range.length - 1)}` : 0);
    range.max = Number(`${"9".repeat(range.length)}`);
  }
  console.log({...range})
  const returnValue = [];

  for (let i = 0; ; i += 1) {
    const fiboNum = Math.round(
      (((1 + Math.sqrt(5)) / 2) ** i - ((1 - Math.sqrt(5)) / 2) ** i) /
        Math.sqrt(5)
    );
    if (fiboNum >= range.min && fiboNum <= range.max) {
      returnValue.push(fiboNum);
    } else if (fiboNum > range.min) {
      break;
    }
  }

  return returnValue;
}
