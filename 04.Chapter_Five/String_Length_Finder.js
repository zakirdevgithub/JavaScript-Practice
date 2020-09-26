//Finding String Length
let nam='Zakir Hossain'

//Manually
let Length=0
while(true){
    if(nam.charAt(Length)==''){
        break
    }
    else{
        Length++
    }
}
console.log(Length)

//With Builtin Function
console.log(nam.length)