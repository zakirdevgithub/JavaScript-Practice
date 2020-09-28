//if we want to change a array Temporarily, we can use Map function
//Map function do'nt change a array permanently

let arr=[1,2,3,4,5,6,7,8,9,10]

let tempArray=arr.map(function(value,index,arr){
    return value*value
})
console.log(arr)
console.log(tempArray)

console.log("-----------------------")
//Custom Map Function
function myMap(arr, callbackFunc){
    let newArray=[]
    for(let i=0; i<arr.length; i++){
        // let cal=arr[i]*10  //it only for one calculation
        let cal=callbackFunc(arr[i]) // it's for many calculation
        newArray.push(cal)
    }
    return newArray
}

function addByFive(value){
    return value+5
}

function mulByTen(value){
    return value*10
}
let tempArray2=myMap(arr,addByFive)
let tempArray3=myMap(arr,mulByTen)
console.log(arr)
console.log(tempArray2)
console.log(tempArray3)