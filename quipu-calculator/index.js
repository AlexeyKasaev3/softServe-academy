function calculate(expression) {
  const expressionWithArabic = expression.replace(/\s/g, '').replace(/[@~]+/g, quipuToArabic)
  return arabicToQuipu(eval(expressionWithArabic))
}

function quipuToArabic(quipu) {
  return quipu
          .replace(/~{2,}/g, v => '0'.repeat(v.length - 1))
          .replace(/@+/g, v => v.length)
          .replace(/~/g, '')
}

function arabicToQuipu(arabic) {
  return ('' + arabic).split('').map((v, i, a) => {
    return  v > 0 ? `${'@'.repeat(v)}${a[i + 1] ? '~' : ''}` : '~'
  }).join('')
}

console.log(calculate("@~@@*@@"), calculate("@~@@*@@") === "@@~@@@@")
console.log(calculate("@~@@+@@~~"), calculate("@~@@+@@~~") === "@@@~@@")