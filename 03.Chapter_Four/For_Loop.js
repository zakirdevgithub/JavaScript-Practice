//Print only even number from 1 to 100 and sum them
let sum=0;
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i)
        sum += i
    }
}
console.log("Sum of all even number from 1 to 100 is: "+sum)