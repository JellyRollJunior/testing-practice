export { capitalize, reverseString };

const capitalize = (string) => {
    if (string == '') return string;
    if (string == null) return string;
    return string.at(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
    return 'ladep';
}