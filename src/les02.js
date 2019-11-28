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

console.log(myLastIndexOf('qwertyuiop', 'io', -1))

function myConcat() {
  return [...arguments].map(value => String(value)).join('');
}

function myIncludes(str, subStr, position = 0) {
  if (typeof position !== 'number') position = 0;
  return new RegExp(subStr, 'i').test(str.slice(position));
}

function myRepeat(string, count = 0) {
  if (typeof string !== 'string') {
      throw new TypeError("input isn't string");
  }
  if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
  }
  if (count === Infinity) {
      throw new RangeError('repeat count must be less than infinity');
  }
  count = Math.floor(count);
  if (string.length === 0 || count === 0) {
      return '';
  }
  var rpt = '';
  for (var i = 0; i < count; i++) {
      rpt += string;
  }
  return rpt;
}

function mySubstr(str, start, length) {
  if (typeof str !== 'string' || typeof start !== 'number') {
      return '';
  }

  const strLength = str.length;

  if (start >= strLength) {
      return '';
  }
  if (start < 0 && -start > strLength) {
      start = 0;
  }

  let startPosition = start < 0 ? strLength + start : start;

  if (typeof length === 'undefined') {
      length = strLength;
  }
  if (length <= 0) {
      return '';
  } else if (length > strLength - startPosition) {
      length = strLength - startPosition;
  }

  let endPosition = startPosition + length;

  let returnValue = '';
  for (let i = startPosition; i < endPosition; ++i) {
      returnValue += str[i];
  }
  return returnValue;
}
