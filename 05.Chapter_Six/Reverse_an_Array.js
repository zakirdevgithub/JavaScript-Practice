let arr=[1,2,3,4,5,6,7,8,9,10]
//Reverse Manually
let temp=0;
for(let i=0; i<(arr.length/2); i++){
    temp=arr[i]
    arr[i]=arr[arr.length-1-i]
    arr[arr.length-1-i]=temp
}
console.log(arr)

let arr2=[1,2,3,4,5,6,7,8,9,10]
//Reverse with Builtin function
console.log(arr2.reverse())