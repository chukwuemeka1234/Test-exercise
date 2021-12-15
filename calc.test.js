const calc = require('./calc.js');

const calculate = new calc();
describe('test calculator functionality', () => {
    test('should add two numbers', () => {
        expect(calculate.add(5, 1)).toBe(6);
    })

    test('should substract two numbers', () => {
        expect(calculate.subtract(5, 1)).toBe(4);
    })

    test('should divide two numbers', () => {
        expect(calculate.divide(6, 2)).toBe(3);
    })

    test('should multiply two numbers', () => {
        expect(calculate.multiply(5, 1)).toBe(5);
    })
})