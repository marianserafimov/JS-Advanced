function fionacci() {
    let firstNum = 0
    let secondNum = 1

    return function() {
        let nextFibNum = firstNum+secondNum
        firstNum = secondNum
        secondNum = nextFibNum
        return firstNum
    }
}
let fib = fionacci()
console.log(fib());
console.log(fib());
console.log(fib());