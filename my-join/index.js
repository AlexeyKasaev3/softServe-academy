function myJoin(arr, separator = '') {
  let returnValue = '';
  if (!arr) {
      return returnValue;
  }
  arr.forEach(v => (returnValue += `${v}${separator}`));
  return returnValue;
}

console.log('myJoin', myJoin([1, 2, 3, 4, 5, 6], ' - '));