let arr=[2,3,6,7,9,12,1,67,16,89]
let find=10
let isFound=false
for(let i=0; i<arr.length; i++){
    if(arr[i]==find){
        console.log(find+' found at index: '+i)
        isFound=true
        break;
    }
    // else{
    //     console.log(find+' Not Found')
    // }
}
if(!isFound){
    console.log(find+' Not Found')
}
