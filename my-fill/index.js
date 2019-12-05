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