import { capitalize, reverseString } from './testing-practice';

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
    })

    test('reverse: reverse', () => {
        expect(reverseString('reverse')).toBe('esrever');
    })
})