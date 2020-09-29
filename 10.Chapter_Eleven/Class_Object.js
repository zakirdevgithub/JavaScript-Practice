class Person{
    constructor(name,age,height){
        this.name=name
        this.age=age
        this.height=height
    }
    display() {
        console.log(this.name,this.age, this.height)
    }
}
let obj=new Person('Zakir Hossain',25,5.6)
obj.display()