// Primitive Data Types
// 1.String
// 2.Number
// 3.Boolean
// 4.null
// 5.undefined
// 6.Symbol

// If a value declaration same as type then this statement call it's literal

//--------------String--------------
let nam="Zakir Hossain" //String literal
let number='100'
let number2=String(200)
console.log(nam)
console.log(number)
console.log(number2)

//---------------Number--------------
let integerNumber=234 // Number literal
let floatNumber=3.1416 // Number literal
let num=Number('678')
console.log(integerNumber+num) //912

//--------------Boolean---------------
let isSunBlue=false //Boolean literal
let isPeopleWillDie=true // Boolean literal
let numBoolean=Boolean(0) //False
let numBoolean2=Boolean(1) //True
let numBoolean3=Boolean(12) //True
console.log(isSunBlue)
console.log(isPeopleWillDie)
console.log(numBoolean)
console.log(numBoolean2)
console.log(numBoolean2)

//----------------Null and Undefined---------------

//Null- null one kind of value it means nothing
//Undefined-  if we declare a variable but not initiate it then it will undefined

let nullVariable= null
let initiateLessVariable
console.log(nullVariable)
console.log(initiateLessVariable)

//----------------- Symbol -------------------

//Symbol make a variable unique
let num1=Symbol();
let num2=Symbol();
console.log(num1===num2); //False 
const age1=Symbol(25);
const age2=Symbol(25);
console.log(age1)
console.log(age2)
console.log(age1===age2);//False  
