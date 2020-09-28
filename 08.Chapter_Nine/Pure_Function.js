/*
-------------------Condition----------------------
1.It return same result if given argument remain same
2.It does not cause any observable side effects

*/

//------------Function 01----------------
function add(a,b){
    return a+b
}
console.log(add(5,10))
console.log(add(5,10))

//Function 01 fullfil 2 conditions. so Function 01 is 
//PURE FUNCTION

//--------------Function 02-------------------
let n=10
function sub(a,b){
    n=20
    return a-b
}
console.log(sub(10,5))
console.log(sub(10,5))
console.log(n) // Side Effect
//Function 2 fullfil no 1 condition but it has a side effect
//it changed value of n. so it is
//NOT PURE FUNCTION