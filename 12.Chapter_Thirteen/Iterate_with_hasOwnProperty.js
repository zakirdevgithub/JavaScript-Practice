function Person(name){
    //Instance Members
    this.name=name
    this.designation=function(){
        console.log('Programmer')
    }
}

//Common properties
Person.prototype={
    //Prototype Members
    age:25,
    walk:function(){
        console.log('can walk')
    },
    info:function(){
        console.log(this.name+ ' Full stack developer')
        this.designation()
    }

}
let obj=new Person('Zakir Hossain')
let obj2=new Person('Zahid Hasan')
obj.info()
obj2.info()
console.log(obj.hasOwnProperty('name'))
console.log(obj.hasOwnProperty('designation'))
console.log(obj.hasOwnProperty('walk')) 
//false because walk is not own property. its common property
console.log(Object.keys(obj)) // it iterate only own property
console.log('-------------------')
//for in loop can iterate both own and common property
for(let i in obj){
    console.log(i)
}
