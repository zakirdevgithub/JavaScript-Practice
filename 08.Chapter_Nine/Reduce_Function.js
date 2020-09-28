/*Reduce function can calculate all value of 
array and return a result
*/
let arr=[1,2,3,4,5]

//array.reduce(function(previous,current){}, Accumulator or Initial Value)
let sum=arr.reduce(function(prev,curr){
    return prev+curr
})
console.log(sum)

let sum_With_Initial_Value=arr.reduce(function(prev,curr){
        return prev+curr  //15
},100) 
//here 100 is initial value. it will add with all sum. 15+100=115
console.log(sum_With_Initial_Value)


let max=arr.reduce(function(prev,curr){
    return Math.max(prev,curr)
},arr[0])

console.log(max)

console.log("-------------------------------")

//------------------Custom Reduce Function-------------
let myArr=[1,2,3,4,5,6,7,8,9,10]
function myReduceFunction(arr,callbackFunc, accumulator){
    for(let i=0; i<arr.length; i++){
        accumulator=callbackFunc(accumulator, arr[i])
    }
    return accumulator
}

let mySum=myReduceFunction(myArr,function(prev,curr){
    return prev+curr
},0)

let myMax=myReduceFunction(myArr,function(prev,curr){
    return Math.max(prev,curr)
},myArr[0])

let myMin=myReduceFunction(myArr,function(prev,curr){
    return Math.min(prev,curr)
},myArr[0])

console.log(mySum)
console.log(myMax)
console.log(myMin)




