import { capitalize, reverseString, calculator } from './testing-practice';

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
    })
});
