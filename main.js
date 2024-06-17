const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent)
  })
})

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
