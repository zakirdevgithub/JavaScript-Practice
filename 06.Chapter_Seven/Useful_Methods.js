let obj={
    x:10,
    y:20,
    z:30

}

//Collect only keys
console.log(Object.keys(obj))

//Collect only values
console.log(Object.values(obj))

//Collect all entries
console.log(Object.entries(obj))

//Copy an object
let obj2=Object.assign({},obj) // {} must include
obj2.x=100
obj2.y=200
obj2.z=300
console.log(obj)
console.log(obj2)
