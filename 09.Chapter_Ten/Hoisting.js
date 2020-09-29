//--------------Hoisting = Creational Phase + Execution Phase--------------

let x
x=10
newFunc(x)
let newFunc=func
func(x)
function func(value){
    console.log(value)
}
newFunc(x)
console.log(x)
console.log(y)

let y=20

let z
console.log(z)
z=30

//-------------------Creational Phase----------------------
/*
x=undefined
Skip: x=10
Skip: newFunc(x)
newFunc=undefined
Skip: func(x)
func=reference of func function
Skip: newFunc(x)
Skip: console.log(x)
Skip: console.log(y)
y=undefined
z=undefined
Skip: console.log(z)
*/

//-------------------Execution Phase----------------------
/*
x=10
newFunc(x)=Error (Because newFunc stored undefined in Creational Phase
                 and Undefined is not a function)

newFunc=reference of func function
newFunc(x)= invoke/call func (Because newFunc containing  reference of func function)
print: 10 (x=10)
print: undefined (y still undefined)
y=20
print: undefined (z still undefined)
z=30

*/
