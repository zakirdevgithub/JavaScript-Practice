/*
If we dont know how many argument can be pass as parameter
then arguments object will handle all argument
--------It is one kind of Python's *args------
*/

function addAll(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(10,20)
addAll(10,20,30,40,50)
addAll(10,20,30,40,50,60,70,80,90,100)