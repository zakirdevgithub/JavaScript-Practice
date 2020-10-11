//----------- Object to Array ---------
let obj={
    a:10,
    b:20,
    c:30
}

let array=Object.entries(obj)
console.log(array)

//----------- Array to Object ---------
let myArray=[
    ['a',10],
    ['b',20],
    ['c',30]
]

let myObj=Object.fromEntries(myArray)
console.log(myObj)