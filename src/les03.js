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

function myPop(arr) {
  return arr.splice(arr.length - 1)[0];
}

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

function myReverse(arr) {
  if (arr.length === 0) return arr;
  const originalArrayValues = [...arr];
  const arrLastIndex = arr.length - 1;
  for (let i = arrLastIndex, k = 0; i >= 0; i -= 1, k += 1) {
      arr[k] = originalArrayValues[i];
  }
  return arr;
}

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

function myUnshift(arr) {
  if (!Array.isArray(arr)) {
      throw new Error('required argument should be array');
  }
  const [, ...unshiftValues] = arguments;
  const newArr = [...unshiftValues, ...arr];
  newArr.forEach((v, i) => (arr[i] = newArr[i]));
  return arr.length;
}

function myJoin(arr, separator = '') {
  let returnValue = '';
  if (!arr) {
      return returnValue;
  }
  arr.forEach(v => (returnValue += `${v}${separator}`));
  return returnValue;
}
