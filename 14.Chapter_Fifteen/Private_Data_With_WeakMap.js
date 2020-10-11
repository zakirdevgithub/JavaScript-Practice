const _name=new WeakMap()
const _age=new WeakMap()
const _height=new WeakMap()
const _print=new WeakMap()

class Person{
    constructor(name,age,height){
        _name.set(this,name)
        _age.set(this,age)
        _height.set(this,height)
        _print.set(this,()=>{
            console.log('This is a private method')
        })
    }

    display(){
        console.log(_name.get(this))
        console.log(_age.get(this))
        console.log(_height.get(this))
        _print.get(this)()
        
    }
}

let pr=new Person('Zakir Hossain',25,5.6)
pr.display()