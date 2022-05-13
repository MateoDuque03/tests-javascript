const fizzbuzz  = require('./fizzbuzz');

describe('Test Fizzbuzz', () => {

    test('Shoul print 1 if they recieve 1', ()=> {
        const expected = 1;
        const result = fizzbuzz(1)
        expect(expected).toBe(result);
    })

    test('Shoul print "fizz" if they recieve a multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(6)
        expect(expected).toBe(result);
    })

    test('Shoul print "buzz" if they recieve a multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(10)
        expect(expected).toBe(result);
    })

    test('Shoul print "fizzbuzz" if they recieve a multiple of 3 and 5', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15)
        expect(expected).toBe(result);
    })
})