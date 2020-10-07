/*
1.Composition Mixin used to remove Inheritance complexity.
2.If Inheritance hirarchy more than 2 level, we should use Composition Mixin instead 
  of Inheritance

*/

function mixins(target, ...sources){ //here ... is 'Rest' Operator
    Object.assign(target, ...sources) //here ... is 'Spread' Operator
}

let canWalk={
   walk: function(){
       console.log('I can Walk')
   } 
}

let canEat={
    eat: function(){
        console.log('I can Eat')
    }
}

let canSwim={
    swim:function(){
        console.log('I can swim')
    }
}

//Combined canWalk and canEat object with person object
// let person=Object.assign({},canWalk,canEat)
// person.walk()
// person.eat()

function Student(name){
    this.name=name
}

//Combined canWalk and canEat Object with Student.prototype
// Object.assign(Student.prototype,canWalk,canEat) -> make a function name mixins
mixins(Student.prototype,canWalk,canEat)

let student=new Student('Zakir Hossain')
student.eat()
student.walk()

function Fish(name){
    this.name=name
}

mixins(Fish.prototype,canEat,canSwim)
let fish=new Fish('Gold Fish')
fish.swim()
fish.eat()

