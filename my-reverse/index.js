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