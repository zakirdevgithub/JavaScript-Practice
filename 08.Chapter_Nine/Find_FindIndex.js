let arr=[1,26,7,8,2,67,1,2,45,7,8]
//Find
let found=arr.find(function(value){
    // return value==25
    return value==2
})
console.log(found)

//FindIndex
let foundIndex=arr.findIndex(function(index){
    return index==2
})
console.log(foundIndex)

//---------------Custom Find Function Implementation------------
let myArray=[1,26,7,8,2,67,1,2,45,7,8]
function myFindFunction(arr,callbackFunc){
    for(let i=0; i<arr.length; i++){
        if(callbackFunc(arr[i])){
            return arr[i]
        }
    }
}
let find67=myFindFunction(myArray,function(value){
    return value==67
})
console.log(find67)

//---------------Custom FindIndex Function Implementation------------
function myFindIndexFunction(arr, callbackFunc){
    for(let i=0; i<arr.length; i++){
        if(callbackFunc(arr[i])){
            return ('Index No: '+i)
        }
    }
}
let indexOf67=myFindIndexFunction(myArray,function(value){
    return value==67
})
console.log(indexOf67)

