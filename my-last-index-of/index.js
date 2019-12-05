function myLastIndexOf(str, subStr, fromIndex) {
  if (
      !str ||
      !subStr ||
      typeof str !== 'string' ||
      typeof subStr !== 'string' ||
      (typeof fromIndex !== 'number' && typeof fromIndex !== 'undefined')
  ) {
      return -1;
  }
  const strLength = str.length;
  const subStrLength = subStr.length;

  if (typeof fromIndex === 'undefined' || fromIndex >= strLength) {
      fromIndex = strLength - 1;
  } else if (fromIndex < 0) {
      fromIndex = 0;
  }

  for (let i = strLength - 1 - (strLength - 1 - fromIndex); i >= 0; i--) {
      var hasMatch = true;
      var k = 0;
      for (let j = i - (subStrLength - 1); k < subStrLength; ++j) {
          if (str[j] !== subStr[k++]) {
              hasMatch = false;
              break;
          }
      }
      if (hasMatch) return i - (subStrLength - 1);
  }
  return -1;
}

console.log('myLastIndexOf', myLastIndexOf('qwertyuiop', 'io', -1))