function addAll(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
    console.log("This will never call")
}
let sum1=addAll(10,20)
let sum2=addAll(10,20,30,40,50)
let sum3=addAll(10,20,30,40,50,60,70,80,90,100)
console.log(sum1)
console.log(sum2)
console.log(sum3)