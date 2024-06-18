const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.calc_input')
const clear = document.querySelector('.clear')
const equals = document.querySelector('.equals')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    display.innerHTML += button.textContent
  })
})

const clearScreen = clear.addEventListener('click', () => {
  display.innerHTML = ''
})

// let equaloperand = equals.

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
