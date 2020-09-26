
let age=null // here age is null. so it is falsy
//Without shorthand or(||)
// if(age){
//     console.log(age) 
// }
// else{
//     console.log(25)
// }

//With Shorthand or(||)
let result=age||25
console.log(result)

let isPresent=true
//Without shorthand and(&&)
// if(isPresent){
//     console.log("You are present")
// }
// else{
//     console.log("You are not present")
// }

//With shorthand and(&&)
isPresent && console.log("You are present")


