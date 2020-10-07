//We can add prototype's property with Constructor Prototype

function Person(){
    this.name='Zakir Hossain'
}
let obj=new Person()
let obj2=new Person()
console.log(Object.getPrototypeOf(obj))
console.log(Person.prototype) //Constructor Prototype
//Add a property
Person.prototype.age=25
console.log(Person.prototype)
console.log(Object.getPrototypeOf(obj))// it inherit age
console.log(Object.getPrototypeOf(obj2))//it also inherit age
//Run in browser for better view