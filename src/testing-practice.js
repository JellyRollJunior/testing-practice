export { capitalize, reverseString, calculator };

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

    return { add, subtract };
};
