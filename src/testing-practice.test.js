import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} from './testing-practice';

describe('The capitalize() method', () => {
    test('capitalize: test', () => {
        expect(capitalize('test')).toBe('Test');
    });

    test('capitalize: a', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('capitalize: empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('capitalize: null', () => {
        expect(capitalize(null)).toBe(null);
    });
});

describe('The reverseString() method', () => {
    test('reverse: pedal', () => {
        expect(reverseString('pedal')).toBe('ladep');
    });

    test('reverse: reverse', () => {
        expect(reverseString('reverse')).toBe('esrever');
    });
});

describe('The calculator object', () => {
    test('Addition', () => {
        const calc = calculator();
        expect(calc.add(1, 1)).toBe(2);
    });

    test('subtract', () => {
        const calc = calculator();
        expect(calc.subtract(1, 1)).toBe(0);
    });

    test('divide', () => {
        const calc = calculator();
        expect(calc.divide(6, 3)).toBe(2);
    });

    test('multiply', () => {
        const calc = calculator();
        expect(calc.multiply(3, 3)).toBe(9);
    });
});

describe('The caesarCipher() function', () => {
    test('Lowercase', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('Lowercase wrap around', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('Uppercase', () => {
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('Uppercase and Lowercase', () => {
        expect(caesarCipher('XYZabc', 3)).toBe('ABCdef');
    });
});

describe('The analyzeArray() function', () => {
    test('Positive values', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test('Negative values', () => {
        expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toStrictEqual({
            average: -4,
            min: -8,
            max: -1,
            length: 6,
        });
    });

    test('Empty array', () => {
        expect(analyzeArray([])).toStrictEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        });
    });

    test('Null array', () => {
        expect(analyzeArray(null)).toStrictEqual({
            average: 0,
            min: 0,
            max: 0,
            length: 0,
        });
    });
});
