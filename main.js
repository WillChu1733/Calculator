const buttons = document.querySelectorAll('.button')
const operators = document.querySelectorAll('.operator')

const display = document.querySelector('.screen')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals')
const previousScreen = document.querySelector('.previous_input')
const currentScreen = document.querySelector('.current_input')

let currentValue = ''
let previousValue = ''
let operator = ''

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
  })
})

function handleNumber(num) {
  currentValue += num
}

operators.forEach((operate) => {
  operate.addEventListener('click', (e) => {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + ''
    currentScreen.textContent = currentValue
  })
})

function handleOperator(operate) {
  operator = operate
  previousValue = currentValue
  currentValue = ''
  console.log(operator)
}

clear.addEventListener('click', () => {
  currentScreen.textContent = ''
  previousScreen.textContent = ''
  operator = ''
  currentValue = ''
  previousValue = ''
})

const equalsOperator = equals.addEventListener('click', () => {
  calculate()
})

function calculate() {}

const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiple = (a, b) => a * b

const divide = (a, b) => a / b

// function operate(a, b, operator) {
//   return a + operator + b
// }
