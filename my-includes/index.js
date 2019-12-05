function myIncludes(str, subStr, position = 0) {
  if (typeof position !== 'number') position = 0;
  return new RegExp(subStr, 'i').test(str.slice(position));
}