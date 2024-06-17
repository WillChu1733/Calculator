// let firstNumber = a
// let secondNumber = b
// let sumOperator =

let a = 253
let b = 12.5
let operator = '+'

const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiple = (a, b) => a * b

const divide = (a, b) => a / b

function operate(a, b, operator) {
  return a + operator + b
}

console.log(`Add ${a} + ${b} = ` + add(a, b))
console.log(`Subtract ${a} - ${b} = ` + subtract(a, b))
console.log(`multiply ${a} * ${b} = ` + multiple(a, b))
console.log(`divide ${a} / ${b} = ` + divide(a, b))
