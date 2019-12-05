function hiddenMessage(message) {
  let decodedMessage = ''
  const phrases = message.match(/[^(\.|\!|\?)]*/mg).filter(v => v)
  const keyWords = phrases.shift(phrases).match(/[a-z']+/gi)
  keyWords.forEach((keyWord, i) => {
    decodedMessage += phrases[i].match(/[a-z']+/gi)[keyWord.length - 1] + ' '
  })
  return decodedMessage.replace(/\s$/, '.').replace(/^\w/, (chr) => chr.toUpperCase())
}

const message = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

console.log(hiddenMessage(message))