/*
----------------Conditions--------------
1. We can pass function as Argument
2. We can return function from another function

*/

function calculation(a,b,func){
    let x=a+b
    let y=a-b
    return func(x,y) 
    // Actually here i invoke/call a function and RETURN IT(Condtion 02)
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
//Pass Function as Argument(Condition 01)
console.log(addition)

let substraction=calculation(5,3,sub)
console.log(substraction)

let multiplication=calculation(5,3,mul)
console.log(multiplication)

let division=calculation(5,3,div)
console.log(division)
