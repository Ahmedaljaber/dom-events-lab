/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/





const buttons = document.querySelectorAll(".button")
const display = document.querySelector(".display")
let currentInput = ""
let num1 = null
let operator = null
let shouldResetDisplay = false

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent

    if (button.classList.contains("number")) {
      if (shouldResetDisplay) {
        display.textContent = value
        shouldResetDisplay = false
      }
      
      else {
        display.textContent += value
      }
    } 
    
      else if (button.classList.contains("operator")) {
      if (value === "C") {
        display.textContent = ""
        currentInput = ""
        num1 = null
        operator = null
      } 
      
      else {
        if (num1 === null) {
          num1 = parseFloat(display.textContent)
          operator = value
          shouldResetDisplay = true
        }
        
      else {
          const num2 = parseFloat(display.textContent)
          display.textContent = evaluate(num1, num2, operator)
          num1 = parseFloat(display.textContent)
          operator = value === "=" ? null : value
          shouldResetDisplay = value !== "="
        }
      }
    } 
      
      else if (button.classList.contains("equals")) {
      if (num1 !== null && operator !== null) {
        const num2 = parseFloat(display.textContent)
        display.textContent = evaluate(num1, num2, operator)
        num1 = parseFloat(display.textContent)
        operator = null
        shouldResetDisplay = true
      }
    }
  })
})

function evaluate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2

    case "-":
      return num1 - num2
    
    case "*":
      return num1 * num2
    
    case "/":
      return num1 / num2
    
    default:
      return num2
  }
}