const _name=Symbol()
const _age=Symbol()
const _height=Symbol()
const _print=Symbol()

class Person{
    constructor(name,age,height){
        this[_name]=name  //private 
        this[_age]=age    //private
        this[_height]=height //private
    }

    [_print](){ //private
        console.log('This is private method')
    }

    display(){
        console.log(this[_name])
        console.log(this[_age])
        console.log(this[_height])
        this[_print]() //must use 'this' on calling time like it
    }
}

let pr=new Person('Zakir Hossain',25,5.6)
pr.display()