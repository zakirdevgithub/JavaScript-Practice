class CustomError extends Error{
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this,CustomError)
        }
    }
}

let a=10
let b=0
try{
    let result=a/b
    if(b===0){
        throw CustomError()
    }
    console.log(result)

//Here we not provide any parameter. This is called Optional Catch Binding
}catch{
    console.log('This is Custom Error Message')
}
finally{
    console.log('This Will Run')
}