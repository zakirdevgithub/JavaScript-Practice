//We use WeakSet to remove a value permanantly from its memory
//It works with only object

let obj1={
    a:10,
    b:20
}
let obj2={
    x:50,
    y:60
}
let weakSet=new WeakSet([obj1,obj2])
obj1=null
console.log(weakSet.has(obj1)) //False
console.log(weakSet.has(obj2)) //True