num1 = document.getElementById("Num1")
num2 = document.getElementById("Num2")
addi = document.getElementById("Add")
sub = document.getElementById("Sub")
mul = document.getElementById("Mul")
div = document.getElementById("Div")
ans = document.getElementById("Ans")


addi.addEventListener("click",function(){
    let result = parseInt(num1.value) + parseInt(num2.value)
    let text = `Addition Of ${num1.value} and ${num2.value} is ${result}`
    ans.innerText = text
})

sub.addEventListener("click",function(){
    let result = parseInt(num1.value) - parseInt(num2.value)
    let text = `Subtraction Of ${num1.value} and ${num2.value}: ${result}`
    ans.innerText = text
})

mul.addEventListener("click",function(){
    let result = parseInt(num1.value) * parseInt(num2.value)
    let text = `Multiplication Of ${num1.value} and ${num2.value}: ${result}`
    ans.innerText = text
})

div.addEventListener("click",function(){
    let result = parseInt(num1.value) / parseInt(num2.value)
    let text = `Division Of ${num1.value} and ${num2.value}: ${result}`
    ans.innerText = text
})