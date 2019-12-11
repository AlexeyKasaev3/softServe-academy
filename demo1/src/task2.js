import { Validator } from './validator.js'

export function checkEnvelopes(envelope1, envelope2) {

  const validationResult = new Validator().validateEnvelopes(...arguments);
  if(validationResult.errors > 0) {
    throw new Error(JSON.stringify(validationResult))
  }

  const envelope1Area = envelope1.a * envelope1.b;
  const envelope2Area = envelope2.c * envelope2.d;
  if (envelope1Area === envelope2Area) return 0
  if (envelope1Area > envelope2Area) {
    if(Math.max(envelope1.a, envelope1.b) > Math.max(envelope2.c, envelope2.d) && 
       Math.min(envelope1.a, envelope1.b) > Math.min(envelope2.c, envelope2.d)) {
      return 1
    }
  } else {
    if(Math.max(envelope2.c, envelope2.d) > Math.max(envelope1.a, envelope1.b) && 
       Math.min(envelope2.c, envelope2.d) > Math.min(envelope1.a, envelope1.b)) {
      return 2
    }
  }
  return 0
}