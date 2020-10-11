let a=10
let b=0
try{
    let result=a/b
    if(b===0){
        throw Error('This is Custom Error Message')
    }
    console.log(result)
}catch(e){
    console.log(e.message)
}
finally{
    console.log('This Will Run')
}