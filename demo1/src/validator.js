export class Validator {
  isEmpty(val) {
    return val.length < 1;
  }

  isNumber(int) {
    console.log(typeof int, int)
    return typeof int === "number" && !isNaN(int);
  }

  isInteger(int) {
    return Number(int) === Math.floor(Number(int));
  }
  isIntegerBigger(int, min) {
    return Number(int) >= min;
  }
  isIntegerSmaller(int, max) {
    return Number(int) <= max;
  }
  isSymbol(str) {
    return str.length === 1;
  }
  isTicket(str) {
    return /^\d{6}$/.test(str);
  }

  validateChessboard(boardHeight, boardWidth, symbol) {
    const errors = new Errors();
    if (this.isEmpty(boardHeight)) {
      errors.addError(1, "must not be empty", "must be integer from 1 to 100");
    } else if (!this.isInteger(boardHeight)) {
      errors.addError(1, "is not integer", "must be integer");
    } else if (!this.isIntegerBigger(boardHeight, 1)) {
      errors.addError(1, "number too small", "must be bigger than 0");
    } else if (!this.isIntegerSmaller(boardHeight, 100)) {
      errors.addError(1, "number too big", "must be <= 100 ");
    }
    if (this.isEmpty(boardWidth)) {
      errors.addError(2, "must not be empty", "must be integer from 1 to 100");
    } else if (!this.isInteger(boardWidth)) {
      errors.addError(2, "is not integer", "must be integer");
    } else if (!this.isIntegerBigger(boardWidth, 1)) {
      errors.addError(2, "number too small", "must be bigger than 0");
    } else if (!this.isIntegerSmaller(boardWidth, 100)) {
      errors.addError(2, "number too big", "must be <= 100 ");
    }
    if (this.isEmpty(symbol)) {
      errors.addError(3, "must not be empty", "must be 1 symbol");
    } else if (!this.isSymbol(symbol)) {
      errors.addError(3, "bigger than 1 symbol", "must be 1 symbol");
    }
    return errors.getErrors();
  }

  validateEnvelopes(envelope1, envelope2) {
    const errors = new Errors();
    if (typeof envelope1 !== "object") {
      errors.addError(
        1,
        "envelope1 is not an object",
        "envelope 1 must be object"
      );
    } else if (envelope1.a === undefined || envelope1.b === undefined) {
      errors.addError(
        1,
        "envelope1 object doesn't have a or b property",
        "envelope1 object must have a and b property"
      );
    } else if (this.isEmpty(envelope1.a) || this.isEmpty(envelope1.b)) {
      errors.addError(
        1,
        "must not be empty",
        "must be number > 0 and < 1000000"
      );
    } else if (!this.isNumber(envelope1.a) || !this.isNumber(envelope1.b)) {
      errors.addError(1, "not a number", "must be number > 0 and < 1000000");
    } else if (
      !this.isIntegerBigger(envelope1.a, 0.00001) ||
      !this.isIntegerBigger(envelope1.b, 0.00001)
    ) {
      errors.addError(
        1,
        "one of envelope1 sides too small",
        "must be bigger than 0.00001"
      );
    } else if (
      !this.isIntegerSmaller(envelope1.a, 1000000) ||
      !this.isIntegerSmaller(envelope1.b, 1000000)
    ) {
      errors.addError(1, "one of envelope1 sides too big", "must be < 1000000");
    }
    if (typeof envelope2 !== "object") {
      errors.addError(
        2,
        "envelope1 is not an object",
        "envelope 1 must be object"
      );
    } else if (envelope2.c === undefined || !envelope1.d === undefined) {
      errors.addError(
        2,
        "envelope2 object doesn't have c or d property",
        "envelope1 object must have c and d property"
      );
    } else if (this.isEmpty(envelope2.c) || this.isEmpty(envelope2.d)) {
      errors.addError(
        2,
        "must not be empty",
        "must be number > 0 and < 1000000"
      );
    } else if (!this.isNumber(envelope2.c) || !this.isNumber(envelope2.d)) {
      errors.addError(2, "not a number", "must be number > 0 and < 1000000");
    } else if (
      !this.isIntegerBigger(envelope2.c, 0.00001) ||
      !this.isIntegerBigger(envelope2.d, 0.00001)
    ) {
      errors.addError(
        2,
        "one of envelope2 sides too small",
        "must be bigger than 0.00001"
      );
    } else if (
      !this.isIntegerSmaller(envelope2.c, 1000000) ||
      !this.isIntegerSmaller(envelope2.d, 1000000)
    ) {
      errors.addError(2, "one of envelope2 sides too big", "must be < 1000000");
    }
    return errors.getErrors();
  }

  validatePalindrome(num) {
    const errors = new Errors();
    if (this.isEmpty(num)) {
      errors.addError(
        1,
        "must not be empty",
        "must be integer from 10 to 9007199254740990"
      );
    } else if (!this.isNumber(num)) {
      errors.addError(1, 'is not a number', 'must be a number')
    } else if (!this.isInteger(num)) {
      errors.addError(1, "is not integer", "must be integer");
    } else if (!this.isIntegerBigger(num, 10)) {
      errors.addError(1, "number too small", "must be bigger than 10");
    } else if (!this.isIntegerSmaller(num, 9007199254740990)) {
      errors.addError(1, "number too big", "must be <= 9007199254740990 ");
    }
    return errors.getErrors();
  }

  validateHappyTickets(context) {
    const errors = new Errors();
    if (typeof context !== "object") {
      errors.addError(1, "not an object", "context must be object");
    } else if (context.min === undefined || context.max === undefined) {
      errors.addError(
        1,
        "object doesn't have min or max property",
        "context object must have min and max properties"
      );
    } else if (this.isEmpty(context.min) || this.isEmpty(context.max)) {
      errors.addError(
        1,
        "min or max property is empty",
        "must be 6 digit string"
      );
    } else if (!this.isTicket(context.min) || !this.isTicket(context.min)) {
      errors.addError(
        1,
        "min or max isn't valid ticket",
        "must be 6 digit string"
      );
    } else if (Number(context.min) >= Number(context.max)) {
      errors.addError(1, "min >= max", "min must be < than max");
    }
    return errors.getErrors();
  }

  validateNumericalSequence(sequenceLength, minimalSquareRoot) {
    const errors = new Errors();
    if (this.isEmpty(sequenceLength)) {
      errors.addError(1, "must not be empty", "must be integer from 1 to 100");
    } else if (!this.isInteger(sequenceLength)) {
      errors.addError(1, "is not integer", "must be integer");
    } else if (!this.isIntegerBigger(sequenceLength, 1)) {
      errors.addError(1, "number too small", "must be bigger than 0");
    } else if (!this.isIntegerSmaller(sequenceLength, 100)) {
      errors.addError(1, "number too big", "must be <= 100 ");
    }
    if (this.isEmpty(minimalSquareRoot)) {
      errors.addError(2, "must not be empty", "must be number from 1 to 1000");
    } else if (!this.isNumber(minimalSquareRoot)) {
      errors.addError(2, "is not number", "must be number");
    } else if (!this.isIntegerBigger(minimalSquareRoot, 1)) {
      errors.addError(2, "number too small", "must be bigger than 0");
    } else if (!this.isIntegerSmaller(minimalSquareRoot, 1000)) {
      errors.addError(2, "number too big", "must be <= 1000 ");
    }
    return errors.getErrors();
  }

  validateFibonacci(range) {
    const errors = new Errors();
    if (typeof range !== "object") {
      errors.addError(1, "range isn't an object", "range must be an object");
    } else if (
      range.min !== undefined &&
      range.min !== undefined &&
      range.length !== undefined
    ) {
      errors.addError(
        1,
        "property length exists with min and max",
        "property length must be separate from properties min and max"
      );
    }
    if (range.length !== undefined) {
      if (this.isEmpty(range.length)) {
        errors.addError(
          1,
          "length is empty",
          "length must be number from 1 to 5"
        );
      } else if (!this.isInteger(range.length)) {
        errors.addError(
          1,
          "length isn't integer",
          "length must be number from 1 to 5"
        );
      } else if (!this.isIntegerBigger(range.length, 1)) {
        errors.addError(
          1,
          "length smaller than 1",
          "length must be from 1 to 5"
        );
      } else if (!this.isIntegerSmaller(range.length, 5)) {
        errors.addError(
          1,
          "length bigger than 5",
          "length must be from 1 to 5"
        );
      }
    } else {
      if (this.isEmpty(range.min) || this.isEmpty(range.max)) {
        errors.addError(
          1,
          "min or max is empty",
          "length must be number from 1 to 5"
        );
      } else if (!this.isInteger(range.min) || !this.isInteger(range.max)) {
        errors.addError(
          1,
          "min or max isn't integer",
          "min and max must be number from 0 to 1000000"
        );
      } else if (!this.isIntegerBigger(range.min, 0) || !this.isIntegerBigger(range.max, 0)) {
        errors.addError(
          1,
          "min or max smaller than 0",
          "min and max must be from 0 to 1000000"
        );
      } else if (!this.isIntegerSmaller(range.min, 1000000) || !this.isIntegerSmaller(range.max, 1000000)) {
        errors.addError(
          1,
          "min or max bigger than 1000000",
          "min and max must be from 0 to 1000000"
        );
      } else if (range.min >= range.max) {
        errors.addError(
          1,
          "min >= max",
          "min must be < max"
        );
      }
    }
    return errors.getErrors();
  }
}

class Errors {
  errors = {
    status: "failed",
    errors: 0,
    reasons: []
  };

  addError(argNum, reason, expected) {
    this.errors.reasons.push({ argNum, reason, expected });
    this.errors.errors += 1;
  }
  getErrors() {
    return this.errors;
  }
}
