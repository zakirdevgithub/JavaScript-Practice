//------------- Destructuring for Array -------------
let array=[1,2,3,4,5]

let [first,second, , ,last]=array
console.log(first,second,last)

//------------- Destructuring for Object -------------
let obj={
    name:'Zakir Hossain',
    age:25,
    address:{
        village:'Kumargara',
        city:'Pabna'
    }

}

let {name,age,address:{village,city}}=obj
console.log(name,age,village,city)
