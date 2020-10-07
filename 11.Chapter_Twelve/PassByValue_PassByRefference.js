//Primitive data type create Pass By Value
//Object type create Pass by Refference

//-------------Pass By Value--------------
//Pass by value not change original value. it just clone original value
let n=10
function passByValue(num){
    num=num+100
    console.log(num)
}
passByValue(n)
console.log(n) // still 10 because original value not changed

console.log('--------------------------')

//-------------Pass By Refference--------------
//Pass by refference change original value.
let myObj={
    x:10,
    y:20
}
function passByRefference(obj){
    obj.x=obj.x+100
    obj.y=obj.y+100
    console.log(obj)
 
}
passByRefference(myObj)
console.log(myObj) // Original value changed because of pass by refference