export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

const capitalize = (string) => {
    if (string == '') return string;
    if (string == null) return string;
    return string.at(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
};

const calculator = () => {
    const add = (a, b) => a + b;

    const subtract = (a, b) => a - b;

    const divide = (a, b) => a / b;

    const multiply = (a, b) => a * b;

    return { add, subtract, divide, multiply };
};

const caesarCipher = (string, shiftFactor) => {
    let cipher = '';
    for (const char of string) {
        if (char == char.toLowerCase()) {
            cipher += String.fromCharCode(
                caesarCipherShift(97, 122, char, shiftFactor)
            );
        } else if (char == char.toUpperCase()) {
            cipher += String.fromCharCode(
                caesarCipherShift(65, 90, char, shiftFactor)
            );
        } else {
            cipher += char;
        }
    }
    return cipher;
};

const caesarCipherShift = (start, end, value, shiftFactor) => {
    let cipher = (value.charCodeAt(0) + shiftFactor) % (end + 1);
    if (cipher <= start) {
        cipher += start;
    }
    return cipher;
};

const analyzeArray = (array) => {
    if (array == null || array.length == 0) {
        return {
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        };
    }
    let average = 0;
    let min = array[0];
    let max = array[0];
    const length = array.length;
    for (const value of array) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        average += value;
    }
    average = average / length;
    return { average, min, max, length };
};
