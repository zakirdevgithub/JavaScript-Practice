class Person{
    constructor(name,age){
        this.name=name
        this.age=age
        //This function will not remain in prototype
        this.func=function(){
            console.log('I am a simple function')
        }
    }
    //Class Properties
    height=5.6

    print(){
        console.log(this) // this= Person Object
    }
    //Static Method
    static display(){
        console.log('This is Static method and this will call with class name, not object')
    }


}
let per=new Person('Zakir Hossain',25)
console.log(per.height)
per.print()
//per.display() //Error Because display is static method
Person.display()