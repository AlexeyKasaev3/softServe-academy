function myPop(arr) {
  return arr.splice(arr.length - 1)[0];
}

const myPopArray = [1, 2, 3, 4, 5];
console.log('myPop', myPop(myPopArray));
console.log('myPopArray', myPopArray);