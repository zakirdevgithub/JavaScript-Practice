//Without Arrow Function
let name=function(){
    console.log('Zakir Hossain')
}
name()

//With Arrow Function
let name2=()=> console.log('Zakir Hossain')
name2()
//-------------------------------------------

//Without Arrow Function
let add=function(a,b){
    return a+b
}
console.log(add(10,20))

//With Arrow Function
let sum=(a,b)=>a+b
console.log(sum(10,20))

//---------------------------------
//Arrow function without ()

let square= x =>x*x
console.log(square(10))

//---------------------------------
//Without Arrow Function
let obj={
    name:'Zakir Hossain',
    func:function(){
        setTimeout(function(){
            console.log(this)
            console.log(this.name)
        }.bind(this),2000)
    }
}
obj.func()

//With Arrow Function
let obj2={
    name:'Zakir Hossain',
    func:function(){ 
        setTimeout(()=>{
            console.log(this)
            console.log(this.name)
        },2000)
    }
}
obj2.func()
