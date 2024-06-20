const buttons = document.querySelectorAll('.button')
const operators = document.querySelectorAll('.operator')

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
    updateScreen()
  })
})

function handleNumber(num) {
  currentValue += num
}

operators.forEach((operate) => {
  operate.addEventListener('click', (e) => {
    handleOperator(e.target.textContent)
  })
})

function handleOperator(operate) {
  if (currentValue === '') return
  if (previousValue !== '') {
    calculate()
  }
  operator = operate
  previousValue = currentValue
  currentValue = ''
}

clear.addEventListener('click', () => {
  currentScreen.textContent = ''
  previousScreen.textContent = ''
  operator = ''
  currentValue = ''
  previousValue = ''
})

equals.addEventListener('click', () => {
  calculate()
  previousScreen.textContent = ''
  currentScreen.textContent = previousValue
})

function calculate() {
  if (previousValue === '' || currentValue === '' || operator === '') return

  previousValue = parseFloat(previousValue)
  currentValue = parseFloat(currentValue)

  let result
  switch (operator) {
    case '+':
      result = add(previousValue, currentValue)
      break
    case '-':
      result = subtract(previousValue, currentValue)
      break
    case '*':
      result = multiple(previousValue, currentValue)
      break
    case '/':
      result = divide(previousValue, currentValue)
      break
    default:
      return
  }

  previousValue = result
  currentValue = ''
  operator = ''

  console.log(previousValue)
}

function updateScreen() {
  previousScreen.textContent = previousValue
  currentScreen.textContent = currentValue
}

const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiple = (a, b) => a * b

const divide = (a, b) => (a /= b)
