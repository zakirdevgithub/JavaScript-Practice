function Iterable(obj){
    return typeof obj[Symbol.iterator]==='function'
}

let array=[1,2,3,4,5]
console.log(Iterable(array)) //True

function test(){
    console.log('Something')
}

console.log(Iterable(test)) //False

let myObject={
    a:10,
    b:20
}
console.log(Iterable(myObject))