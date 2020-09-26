let add=function(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(add(10,20,30,40))

let returnObject=function(){
    return{
        name:'Zakir Hossain',
        age:25,
        height:5.6
    }
}
console.log(returnObject())
console.log(returnObject().name)
console.log(returnObject().age)
console.log(returnObject().height)