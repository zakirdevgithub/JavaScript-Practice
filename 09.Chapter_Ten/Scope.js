/*
1. Inner scope can access Outer 
2. Outer scope Can Not access Inner scope (Function call is another thing)
*/

let x=10
function func(){
    console.log(x)
}
func()

//-------------------Nested Scope--------------
function outer(){
    let a=10
    console.log(a)
    //console.log(b) Error because b in inner function
    function inner(){
        let b=20
        console.log(a)
    }
    inner()
}
outer()

//-----------------Lexical Scope------------------
//Above example is also example of Lexical Scope
/*
Lexical is form of Lexing(tokenization )
First Javascript compiler make source code into many token then 
Example: let a=10 
let-> one token
a -> one token
= -> one token
10 -> one token
*/