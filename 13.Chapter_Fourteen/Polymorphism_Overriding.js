function InheritAndReset(Parent,Child){
    Child.prototype=Object.create(Parent.prototype)
    //Reset Constructor
    Child.prototype.constructor=Child
}

function Person(name,age){
    this.name=name
    this.age=age
}

Person.prototype={
    Common:function(){
        console.log('This is common function')
    }
}

function Teacher(name,age){
    Person.call(this,name,age)
}
InheritAndReset(Person,Teacher)

Teacher.prototype.Common=function(){
    //If we want parent common
    Person.prototype.Common.call(this)
    console.log('This common from Teacher Function')
}

function Student(name,age){
    Person.call(this,name,age)
}

InheritAndReset(Person,Student)


let teacher=new Teacher('Shahjahan Sir',50)
let student=new Student('Zakir Hossain',25)
teacher.Common()
student.Common()

