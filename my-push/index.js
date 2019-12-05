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