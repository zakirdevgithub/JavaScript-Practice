//Falsy values are '', 0, null, undefined, NaN

//-------------Falsy Value--------------
console.log(Boolean('')) //false
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false

let num
console.log(Boolean(num)) // num is undefined so result is false
console.log(Boolean('hello' * 9)) // 'hello' not a number so result is false

//All are truthy value except falsy values


