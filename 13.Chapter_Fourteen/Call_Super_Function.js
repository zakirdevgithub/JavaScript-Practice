function Person(name){
    this.name=name
}


function Student(age,name){
    Person.call(this,name)
    this.age=age
}


let student=new Student(25,'zakir')
console.log(student.name)