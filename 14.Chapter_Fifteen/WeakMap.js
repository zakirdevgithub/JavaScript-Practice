//We use WeakMap to remove key,value permanently from  memory
//It works with only object

let a={a:100}, b={b:200}

let weakMap=new WeakMap([[a,10],[b,20]])

b=null
console.log(weakMap.get(a))
console.log(weakMap.get(b)) //Undefined
