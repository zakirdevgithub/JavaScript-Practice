//Prototype = Parent Class
let obj={}

//Inheritance step
//obj -> new Object() -> Object
console.log(Object.getPrototypeOf(obj))
let array=[]
//Inheritance step
//array -> new Array() -> Object

function Test(name){
    this.name=name
}

let test=new Test('Zakir Hossain')

//Inheritance step
//test -> new Test() -> Object
