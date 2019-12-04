function countdown(s) {
  let sign = '+';
  if(s < 0) {
    sign = '-'
    s = -s
  }
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const seconds = s % 60;
  s = (s - seconds) / 60;
  const minutes = s % 60;
  const hours = (s - minutes) / 60;

  return `${sign}${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  function addZero(num) {
    return num < 10 ? `0${num}` : num
  }
}

console.log(countdown(-154800000) === '-43:00:00')
console.log(countdown(0) === '+00:00:00')
console.log(countdown(61000) === '+00:01:01')
console.log(countdown(360000000) === '+100:00:00')