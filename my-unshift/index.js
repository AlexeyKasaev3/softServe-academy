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