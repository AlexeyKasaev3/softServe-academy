function dateFormatter(date, format) {
  const dateISO = new Date(Number(date)).toISOString()

  const replaceRules = {
    yyyy : '\\d{4}',
    yy : '(?:\\d{2})(\\d{2})(?:.*)',
    MM : '(?:.{5})(\\d{2})(?:.*)',
    M :  '(?:.{5})([1-9]{2}|(?:0)(\\d))(?:.*)',
    dd :  '(?:.{8})(\\d{2})(?:.*)',
    d :  '(?:.{8})([1-9]{2}|(?:0)(\\d))(?:.*)',
    HH :  '(?:.{11})(\\d{2})(?:.*)',
    H :  '(?:.{11})([1-9]{2}|(?:0)(\\d))(?:.*)',
    mm :  '(?:.{14})(\\d{2})(?:.*)',
    m :  '(?:.{14})([1-9]{2}|(?:0)(\\d))(?:.*)',
    ss :  '(?:.{16})(\\d{2})(?:.*)',
    s :  '(?:.{16})([1-9]{2}|(?:0)(\\d))(?:.*)',
  }

  Object.keys(replaceRules).forEach(key => {
    if(format.indexOf(key) !== -1) {
      format = format.replace(new RegExp(key, 'g'), dateISO.match(new RegExp(replaceRules[key])).pop())
    }
  })

  return format

}

let baseDate = new Date(0);
let baseStr= '0';
let baseInt = 0;

const formats = {
  'HH:mm':'00:00',
  'dd/MM/yyyy': '01/01/1970',
  'd/M/yy H%m': '1/1/70 0%0',
  'ss@mm == s@m': '00@00 == 0@0'
};

Object.keys(formats).forEach(f => {
  console.log(dateFormatter(baseDate, f), dateFormatter(baseDate, f) === formats[f]);
  console.log(dateFormatter(baseStr, f), dateFormatter(baseDate, f) === formats[f]);
  console.log(dateFormatter(baseInt, f), dateFormatter(baseDate, f) === formats[f]);
})