import { Validator } from './validator.js'

export function getBiggestPalindrome(num) {

  const validationResult = new Validator().validatePalindrome(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }


  let str = num.toString();
  let longestPalindrome = str.substring(0, 1);
  for (let i = 0; i < str.length; i += 1) {
    let temp = findPalindrome(str, i, i);
    if (
      temp.length > longestPalindrome.length ||
      (temp.length === longestPalindrome.length &&
        Number(temp) > Number(longestPalindrome))
    ) {
      longestPalindrome = temp;
    }
    temp = findPalindrome(str, i, i + 1);
    if (
      temp.length > longestPalindrome.length ||
      (temp.length === longestPalindrome.length &&
        Number(temp) > Number(longestPalindrome))
    ) {
      longestPalindrome = temp;
    }
  }
  return longestPalindrome.length > 1 ? longestPalindrome : 0;
};

const findPalindrome = (str, begin, end) => {
  while (begin >= 0 && end <= str.length - 1 && str[begin] === str[end]) {
    begin -= 1;
    end += 1;
  }
  return str.substring(begin + 1, end);
};
