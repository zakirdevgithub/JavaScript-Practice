/*
if one function's output will be another function's input then this system 
call function Composition.
*/

function print(input){
    console.log(input) //100
}
function mul(a){
    return a*10
}

function add(x,y,z){
    return x+y+z
}


print(mul(add(5,3,2)))