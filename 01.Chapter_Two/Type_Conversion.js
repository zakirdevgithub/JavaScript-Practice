//------------string to integer------------
let num='100'
console.log(Number(num))  //way one
console.log(Number.parseInt(num)) //way two

//------------string to float--------------
let num2='87.96'
console.log(Number(num2)) //way one
console.log(Number.parseFloat(num2)) //way two

//------------string to boolean-----------
let myBool='true'
console.log(Boolean(myBool))

//-----------integer to string-------------
let intNumber=987
console.log(String(intNumber)) //way one
console.log(intNumber.toString()) //way two

//-----------float to string-------------
let floatNumber=6.51
console.log(String(floatNumber)) //way one
console.log(floatNumber.toString()) //way two

//--------------boolean to string-----------
let isTrue=true
console.log(String(isTrue)) //way one
console.log(isTrue.toString()) //way two

//-------------integer to float---------
let number=25
number=Number.parseFloat(number)
console.log(number)

//-------------float to integer---------
let number2=25.76
number2=Number.parseInt(number2)
console.log(number2)