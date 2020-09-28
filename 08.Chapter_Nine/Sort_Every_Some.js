let arr=[1,4,6,12,2,45,6,-5,6,-3,-7]

//Sort
arr.sort(function(a,b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }
    else{
        return 0
    }
})
console.log(arr)

//Reverse
arr.sort(function(a,b){
    if(a>b){
        return -1
    }else if(a<b){
        return 1
    }
    else{
        return 0
    }
})
console.log(arr)

console.log('----------------------')
let obj=[{
    name:'Zakir',
    age:25
   },
   {
    name:'Shovon',
    age:26
   },
   {
    name:'Limon',
    age:30
   },
   {
    name:'Pranto',
    age:76
   }
]

obj.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(obj)


//-----------------Every----------------
//if every item on same condition it return true
let arrEvery=[1,3,5,7,9]
let result=arrEvery.every(function(value){
    return value % 2 !=0
})
console.log(result)


//----------------Some----------------
//if at list One item fullfil condtion it return true
let arrSome=[1,3,5,7,9,12,16,18,19]
let result2=arrSome.some(function(value){
    return value % 2 !=0
})
console.log(result2)
