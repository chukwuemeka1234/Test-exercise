const stringLength = (string) => {
    return string.length;
};

const reverseString = (string) => {
    const reverseArr = [];
    for(let i = string.length - 1; i >= 0; i--) {
        reverseArr.push(string[i]);
    }
    return reverseArr.join('');
};

const capitalize = (string) => {
    const letterArr = [];
    letterArr.push(string[0].toUpperCase());
    for(let i = 1; i < string.length; i++) {
        letterArr.push(string[i]);
    }
    return letterArr.join('');
}

module.exports = { stringLength, reverseString, capitalize };