let arr=[1,2,3,4,5,6,7,8,9,10]
//Sum all value
function SumAll(arr,lastIndex){
    if(lastIndex===0){
        return 1
    }
    return arr[lastIndex]+SumAll(arr,lastIndex-1)
/*
call 01: arr[9]+sumAll(arr,8)= 10+sumAll(arr,8)
call 02: arr[8]+sumAll(arr,7)= 10+9+sumAll(arr,7)
call 03: arr[7]+sumAll(arr,6)= 10+9+8+sumAll(arr,6)
call 04: arr[6]+sumAll(arr,5)= 10+9+8+7+sumAll(arr,5)
call 05: arr[5]+sumAll(arr,4)= 10+9+8+7+6+sumAll(arr,4)
call 06: arr[4]+sumAll(arr,3)= 10+9+8+7+6+5+sumAll(arr,3)
call 07: arr[3]+sumAll(arr,2)= 10+9+8+7+6+5+4+sumAll(arr,2)
call 08: arr[2]+sumAll(arr,1)= 10+9+8+7+6+5+4+3+sumAll(arr,1)
call 09: arr[1]+sumAll(arr,0)= 10+9+8+7+6+5+4+3+2+1(sumAll(arr,0) return 1)=55
*/
}
console.log(SumAll(arr,arr.length-1))

//Factorial
function fact(n){
    if(n==1){
        return 1
    }
    return n*fact(n-1)
/*
call 01: 5*fact(4)
call 02: 5*4*fact(3)
call 03: 5*4*3*fact(2)
call 04: 5*4*3*2*1 (fact(1) return 1)=120
*/
}
console.log(fact(5))
