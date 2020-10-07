function Person(){

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
    this.name=name
    this.age=age
}
// Teacher.prototype={
//     // walk:function(){
//     //     console.log('He can walk')
//     // },
//     // learn:function(){
//     //     console.log('He can learn')
//     // },
//     teach:function(){
//         console.log('He teaches us')
//     }
// }

function Student(name,age){
    this.name=name,
    this.age=age
}



// Student.prototype={
//     // walk:function(){
//     //     console.log('He can walk')
//     // },
//     // learn:function(){
//     //     console.log('He can learn')
//     // },
//     attendence:function(){
//         console.log('need attendence mark')
//     }
// }

Teacher.prototype=Object.create(Person.prototype)
Student.prototype=Object.create(Person.prototype)

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

