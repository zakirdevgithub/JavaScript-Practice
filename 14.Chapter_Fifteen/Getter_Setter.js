const _name=Symbol()
const _age=Symbol()
const _height=Symbol()


class Person{
    constructor(name,age,height){
        this[_name]=name  //private 
        this[_age]=age    //private
        this[_height]=height //private
    }


    set name(v){
        this[_name]=v
    }
    get name(){
        return this[_name]
    }


    display(){
        console.log(this[_name])
        console.log(this[_age])
        console.log(this[_height])

    }
}

let pr=new Person('Zakir Hossain',25,5.6)
pr.display()
pr.name='Ekhtiar Uddin Bin Bakhtiar Khilzi'
console.log(pr.name) //No need function call or use parenthesis