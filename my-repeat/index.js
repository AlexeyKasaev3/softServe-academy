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