const fibonacci = require('./fibonacci');
describe('Series Fibonacci', () => {

    test('sholud show number in position 5 return 3', () => {
        const expected = 3;
        const result = fibonacci(5)
        expect(expected).toBe(result);
    })

    test('sholud show number in position 10 return 34', () => {
        const expected = 34;
        const result = fibonacci(10)
        expect(expected).toBe(result);
    })
})