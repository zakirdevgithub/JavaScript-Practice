let a=10
let b=0
try{
    let result=a/b
    if(b===0){
        throw Error()
    }
    console.log(result)

//Here we not provide any parameter. This is called Optional Catch Binding
}catch{
    console.log('This is Custom Error Message')
}
finally{
    console.log('This Will Run')
}