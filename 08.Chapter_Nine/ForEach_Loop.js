let arr=[1,2,3,4,5,6,7,8,9,10]

let sum=0
arr.forEach(function(value,index,arr){
    // console.log(value,index,arr)
    if(value%2==0){
        sum+=value
    }
})
console.log(sum)
console.log("--------------------------")

//Custom ForEach Function
 function forEach(arr, callBackFunction){
    for(let i=0; i<arr.length; i++){
        // console.log(i)
        callBackFunction(arr[i],i,arr)
    }
 }

 forEach(arr,function(value,index,arr){
    //  console.log(value,index,arr)
    arr[index]=value+5 //it will change original value of arr
 })
 console.log(arr) // Original value increased by 5
