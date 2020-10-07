/*
We create extend function for reduce duplicate code 
*/

function extended(Parent,Child){
    Child.prototype=Object.create(Parent.prototype)
    //-------------Reset Constructor-------
    Child.prototype.constructor=Child
}

function Person(name,age){
    this.name=name
    this.age=age
}


Person.prototype={
    walk:function(){
        console.log(this.name+' can walk')
    },
    learn:function(){
        console.log('He can learn')
    }
}

function Teacher(name,age){
    Person.call(this,name,age)
}


function Student(name,age){
    Person.call(this,name,age)
}

// Teacher.prototype=Object.create(Person.prototype)
// //-------------Reset Constructor-------
// Teacher.prototype.constructor=Teacher
extended(Person,Teacher)
// Student.prototype=Object.create(Person.prototype)
// //------------Reset Constructor----------
// Student.prototype.constructor=Student
extended(Person,Student)


//Extend Prototype after inheritance. like this otherwise it will create error
Student.prototype.Mark={
    physics:87,
    chemistry:88
}

Teacher.prototype.Designation=function(department){
    console.log('Software Developer. BSc in '+department)
}

let teacher=new Teacher('Sabbir Ahmed',26)
let student=new Student('Zakir Hossain',25)
teacher.walk()
student.walk()
console.log(student.Mark.physics)
teacher.Designation('CSE')

