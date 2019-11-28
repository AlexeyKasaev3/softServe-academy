function myFill(arr, value, startIndex = 0, endIndex = undefined) {
  if (!arr || !value) {
      throw new Error('required arguments are not passed');
  }
  const arrLength = arr.length;
  if (endIndex === undefined) {
      endIndex = arrLength;
  }
  startIndex =
      startIndex < 0
          ? Math.max(arrLength + startIndex, 0)
          : Math.min(startIndex, arrLength);
  endIndex =
      endIndex < 0
          ? Math.max(arrLength + endIndex, 0)
          : Math.min(endIndex, arrLength);

  while (startIndex < endIndex) {
      arr[startIndex] = value;
      startIndex += 1;
  }

  return arr;
}

console.log('myFill', myFill([1, 2, 3, 4, 5], '*', -3, -1));

function myPop(arr) {
  return arr.splice(arr.length - 1)[0];
}

const myPopArray = [1, 2, 3, 4, 5];
console.log('myPop', myPop(myPopArray));
console.log('myPopArray', myPopArray);

function myPush(arr) {
  if (!Array.isArray(arr)) {
      throw new Error('required argument should be array');
  }

  const argumentsToInsertLength = arguments.length - 1;

  for (let i = 1; i <= argumentsToInsertLength; i += 1) {
      arr[arr.length] = arguments[i];
  }
  return arr.length;
}

const myPushArray = [1, 2, 3, 4, 5];
console.log('myPush', myPush(myPushArray, 999));
console.log('myPushArray', myPushArray);

function myReverse(arr) {
  if (arr.length === 0) return arr;
  const originalArrayValues = [...arr];
  const arrLastIndex = arr.length - 1;
  for (let i = arrLastIndex, k = 0; i >= 0; i -= 1, k += 1) {
      arr[k] = originalArrayValues[i];
  }
  return arr;
}

const myReverseArray = [1, 2, 3, 4, 5, 6];
console.log('myReverse', myReverse(myReverseArray));
console.log('myReverseArray', myReverseArray);

function myShift(arr) {
  if (arr.length === 0) return undefined;
  const originalArrayValues = [...arr];
  const arrLastIndex = arr.length - 1;
  for (let i = 1, k = 0; i <= arrLastIndex; i += 1, k += 1) {
      arr[k] = originalArrayValues[i];
  }
  arr.length = originalArrayValues.length - 1;
  return originalArrayValues[0];
}

const myShiftArray = [1, 2, 3, 4, 5];
console.log('myShift', myShift(myShiftArray));
console.log('myShiftArray', myShiftArray);

function myUnshift(arr) {
  if (!Array.isArray(arr)) {
      throw new Error('required argument should be array');
  }
  const [, ...unshiftValues] = arguments;
  const newArr = [...unshiftValues, ...arr];
  newArr.forEach((v, i) => (arr[i] = newArr[i]));
  return arr.length;
}

const myUnshiftArray = [1, 2, 3, 4, 5, 6, 7];
console.log('myUnshift', myUnshift(myUnshiftArray, 'q', 'b'));
console.log('myUnshiftArray', myUnshiftArray);

function myJoin(arr, separator = '') {
  let returnValue = '';
  if (!arr) {
      return returnValue;
  }
  arr.forEach(v => (returnValue += `${v}${separator}`));
  return returnValue;
}

console.log('myJoin', myJoin([1, 2, 3, 4, 5, 6], ' - '));

