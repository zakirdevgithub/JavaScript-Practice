/*Callback function means pass a function in a function and call it
from this function.
*/

function calculation(a,b,func){ // here func is a callback function
    let x=a+b
    let y=a-b
    return func(x,y) 
    // Actually here i invoke/call a function and RETURN IT
}

function add(num1,num2){
    return num1+num2
}
function sub(num1,num2){
    return num1-num2
}
function mul(num1,num2){
    return num1*num2
}
function div(num1,num2){
    return num1/num2
}

let addition=calculation(5,3,add) 
console.log(addition)

let substraction=calculation(5,3,sub)
console.log(substraction)

let multiplication=calculation(5,3,mul)
console.log(multiplication)

let division=calculation(5,3,div)
console.log(division)