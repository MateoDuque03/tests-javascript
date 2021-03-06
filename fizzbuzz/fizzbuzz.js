function fizzbuzz(num) {
    if (num == 0)
        return num
    if (num % 3 == 0 && num % 5 == 0) 
        return 'fizzbuzz';

    if (num % 3 == 0)
        return 'fizz';

    if (num % 5 == 0)
        return 'buzz'

    return num
}

function print(num) {
    for (let index = 0; index <= num; index++) {
        console.log(`${index}: ${fizzbuzz(index)}`);
    }
}

print(16);

module.exports = fizzbuzz;