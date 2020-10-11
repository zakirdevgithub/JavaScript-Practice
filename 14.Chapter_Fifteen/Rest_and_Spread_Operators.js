//------------ Rest Operator -------------

function test(name,age, ...numbers){
    console.log(name, age, numbers.reduce((a,b)=>a+b))
}

test('Zakir Hossain',25, 1,2,3,4,5,6,7,8,9,10)

//------------- Spread Operator ------------

let array=[1,2,3,4,5]
console.log(...array)

let obj={
    a:10,
    b:20,
    c:30
}

let obj2={
    ...obj
}
console.log(obj2)