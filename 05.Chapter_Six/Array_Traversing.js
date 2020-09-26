let numbers=[1,2,3,4,78,5,90,12,45,56]
//sum all even numbers
let sum=0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        sum +=numbers[i]
    }
}
console.log(sum)