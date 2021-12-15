const { stringLength, reverseString, capitalize } = require('./functions');

test('Should return string "Victor" length', () => {
    expect(stringLength("Victor")).toBe(6);
});

test('Should return reverse string', () => {
    expect(reverseString("rotciv")).toBe('victor');
});

test('function should take a string and return a string with the first character capitalized', () => {
    expect(capitalize('victor')).toBe('Victor');
});

