let obj={
    x:10,
    y:20,
    z:30
}
console.log(obj.x)
console.log(obj['y'])

//Update property
obj.x=100
obj.y=200
obj.z=300
console.log(obj)

let withString='x'
console.log(obj[withString])