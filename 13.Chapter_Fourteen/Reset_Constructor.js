/* If we not Reset Constructor, the Constructor function lost his Constructor and
will show Parent's Constructor
*/ 
//******We Must Reset Constructor After Inheritance*****

function Person(){

}

Person.prototype={
    walk:function(){
        console.log(this.name+' can walk')
    }
}

function Student(name){
    this.name=name
}

Student.prototype=Object.create(Person.prototype)
//----------Reset Constructor----------
Student.prototype.constructor=Student

//To check Run in browser and type: New Student.prototype.constructor('zakir')

let student=new Student('zakir')
student.walk()
