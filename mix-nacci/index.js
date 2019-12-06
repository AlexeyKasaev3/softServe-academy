function mixNacci(pattern, repeats) {

    if(!repeats || pattern.length === 0) {
        return []
    }

    const returnValue = []

    const naccis = {
        fib: getNextFib(),
        pad: getNextPad(),
        jac: getNextJac(),
        pel: getNextPell(),
        tri: getNextTri(),
        tet: getNextTet(),
    }
    for(let i = 0; i < repeats; i += 1) {
        pattern.push(pattern[i])
        returnValue.push(naccis[pattern[i]]())
    }
    return returnValue
}

function getNextFib() {
    let row = [0, 1]
    let numToExtract = 0
    return function() {
        let returnValue;
        if(numToExtract > 1) {
            returnValue = row[row.length - 1] + row[row.length - 2]
            row.push(returnValue)
        } else {
            returnValue = row[numToExtract]
        }
        numToExtract += 1
        return returnValue
    }
}

function getNextPad() {
    let row = [1, 1, 1, 2, 2]
    let numToExtract = 0
    return function() {
        let returnValue;
        if(numToExtract > 4) {
            returnValue = row[row.length - 1] + row[row.length - 5]
            row.push(returnValue)
        } else {
            returnValue = row[numToExtract]
        }
        numToExtract += 1
        return returnValue
    }
}

function getNextJac() {
    let numToExtract = 0
    return function() {
        const returnValue = (2 ** numToExtract - (-1) ** numToExtract) / 3
        numToExtract += 1
        return returnValue;
    }
}

function getNextPell() {
    let numToExtract = 0
    return function() {
        const returnValue =  Math.ceil(((1 + Math.sqrt(2)) ** numToExtract - (1 - Math.sqrt(2)) ** numToExtract) / (2 * Math.sqrt(2)))
        numToExtract += 1
        return returnValue;
    }
}

function getNextTri() {
    let numToExtract = 0
    return function() {
        const a = (19 + 3 * Math.sqrt(33)) ** (1 / 3);
        const b = (19 - 3 * Math.sqrt(33)) ** (1 / 3);
        const returnValue = Math.round(3 * ((a + b + 1) / 3) ** numToExtract / (a ** 2 + b ** 2 + 4));
        numToExtract += 1
        return returnValue;
    }
}

function getNextTet() {
    let row = [0, 0, 0, 1]
    let numToExtract = 0
    return function() {
        let returnValue;
        if(numToExtract > 3) {
            returnValue = row[row.length - 1] + row[row.length - 2] + row[row.length - 3] + row[row.length - 4]
            row.push(returnValue)
        } else {
            returnValue = row[numToExtract]
        }
        numToExtract += 1
        return returnValue
    }
}

console.log(`[], 10`, mixNacci([], 10))
console.log(`['fib'], 0`, mixNacci(['fib'], 0))
console.log(`['fib'], 10`, mixNacci(['fib'], 10))
console.log(`['pad'], 10`, mixNacci(['pad'], 10))
console.log(`['jac'], 10`, mixNacci(['jac'], 10)) 
console.log(`['pel'], 10`, mixNacci(['pel'], 10))
console.log(`['tri'], 10`, mixNacci(['tri'], 10))
console.log(`['tet'], 10`, mixNacci(['tet'], 10))
console.log(`['fib', 'tet'], 10`, mixNacci(['fib', 'tet'], 10))
console.log(`['jac', 'jac', 'pel'], 10`, mixNacci(['jac', 'jac', 'pel'], 10))

