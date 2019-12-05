function myConcat() {
  return [...arguments].map(value => String(value)).join('');
}