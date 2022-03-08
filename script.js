numbers=[];
operators=[];

let input = document.body.querySelector('.display')
let numberButtons = document.body.querySelectorAll('.number')
let operatorButtons = document.body.querySelectorAll('.operator')

operatorButtons[0].addEventListener("click", function(){
  let numSpan = document.createElement('span');
  numSpan.innerHTML=`
  +
  `
  input.appendChild(numSpan)
  let operandFinal = parseInt(operand.join(''))
  numbers.push(operandFinal)
  operand=[]
  operators.push('+')
  
  console.log(operators)
})
operatorButtons[1].addEventListener("click", function(){
  let numSpan = document.createElement('span');
  numSpan.innerHTML=`
  -
  `
  input.appendChild(numSpan)
  let operandFinal = parseInt(operand.join(''))
  numbers.push(operandFinal)
  operand=[]
  operators.push('-')
  console.log(operators)
})
operatorButtons[2].addEventListener("click", function(){
  let numSpan = document.createElement('span');
  numSpan.innerHTML=`
  /
  `
  input.appendChild(numSpan)
  let operandFinal = parseInt(operand.join(''))
  numbers.push(operandFinal)
  operand=[]
  operators.push('/')
  console.log(operators)
})
operatorButtons[3].addEventListener("click", function(){
  let numSpan = document.createElement('span');
  numSpan.innerHTML=`
  *
  `
  input.appendChild(numSpan)
  let operandFinal = parseInt(operand.join(''))
  numbers.push(operandFinal)
  operand=[]
  operators.push('*')
  console.log(operators)
})
operatorButtons[4].addEventListener("click", function(){
  let operandFinal = parseInt(operand.join(''))
  numbers.push(operandFinal)
  let answer = calculate(numbers,operators)
  let numSpan = document.createElement('span');
    numSpan.innerHTML=`
    = ${answer}
    `
    input.appendChild(numSpan)

}
)

operatorButtons[5].addEventListener("click", function(){
   input.innerText = ''
   numbers=[];
   operators=[];
   operand=[];
 }
 )



let operand =[]
let operandFinal = operand.join('')

for (let i=0;i<operatorButtons.length;i++){
  operatorButtons[i].addEventListener('mousedown', function(){
    operatorButtons[i].classList.toggle('down')
  })
  operatorButtons[i].addEventListener('mouseup', function(){
    operatorButtons[i].classList.toggle('down')
  })
}


for (let i=0;i<numberButtons.length;i++){
  numberButtons[i].addEventListener('click', function(){
    let numSpan = document.createElement('span');
    numSpan.innerHTML=`
    ${i}
    `
    input.appendChild(numSpan)
    operand.push(parseInt(`${i}`))
    console.log(operand)
    console.log(operandFinal)
    console.log(numbers)

  })
  numberButtons[i].addEventListener('mousedown', function(){
    numberButtons[i].classList.toggle('down')
  })
  numberButtons[i].addEventListener('mouseup', function(){
    numberButtons[i].classList.toggle('down')
  })
}







function calculate(numbers,operators){
 let answer = numbers[0];
 for (i=0;i<operators.length;i++){
  if (operators[i]==="+"){
  answer = answer+numbers[i+1]
 } else if (operators[i]==="-"){
  answer = answer-numbers[i+1]
 } else if (operators[i]==="/"){
  answer = answer/numbers[i+1]
 } else {
  answer = answer*numbers[i+1]
 }
 }
 return answer
}
