/*
Currying means No 1 function return function 2, No 2 function return function 3
and so on  and rest  will be clear with example
*/


function myCurrying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

let result=myCurrying(10)(20)(30)
console.log(result)