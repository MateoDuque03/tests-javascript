function fibonacci(position){
    let arrayFibonacci = [0, 1];
    for (let index = 0; index < position; index++) {
        arrayFibonacci[index + 1] = arrayFibonacci[arrayFibonacci.length-1] + arrayFibonacci[arrayFibonacci.length - 2]
    }
    return arrayFibonacci;
}

console.log(fibonacci(10));

module.exports = fibonacci;