//Filter function filter data on condition

let arr=[2,5,7,4,8,12,16,3,1,17,18]
//Filter only odd number
let filteredArray=arr.filter(function(value){
    return value %2 !=0
})
console.log(filteredArray)

//Custom Filter Function
function myFilter(arr,callbackFunc){
    let newArr=[]
    for(let i=0; i<arr.length; i++){
        // if(arr[i]%2==0){  // it can filter only even number
        //     newArr.push(arr[i])
        // }
        if(callbackFunc(arr[i])){ //it can filter on many condition
            newArr.push(arr[i])
        }
    }
    return newArr
}
// let tempArr=myFilter(arr)
// console.log(tempArr)

function evenNumber(value){
    return value%2==0 //Return true if even or false
}

function oddNumber(value){
    return value%2!=0 //Return true if odd or false
}

function dividedByThree(value){
    return value%3 ==0 //Return true if divided by 3 or false
}


let evenArray=myFilter(arr,evenNumber)
console.log(evenArray)

let oddArray=myFilter(arr,oddNumber)
console.log(oddArray)

let dividedArray=myFilter(arr,dividedByThree)
console.log(dividedArray)