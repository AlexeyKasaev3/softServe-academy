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