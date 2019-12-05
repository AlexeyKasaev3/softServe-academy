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