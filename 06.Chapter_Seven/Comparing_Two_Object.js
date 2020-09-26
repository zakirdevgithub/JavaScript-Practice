let obj={
    x:10,
    y:20
}

let obj2={
    x:10,
    y:20
}

console.log(obj === obj2) //False because obj and obj2 in different memory location

//Compare with condition
if(obj.x===obj2.x && obj.y===obj2.y){
    console.log(true)
}

//Compare with JSON
console.log(JSON.stringify(obj)===JSON.stringify(obj2))
//True because JSON.stringify() make turn object into string