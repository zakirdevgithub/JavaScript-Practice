// let p1=new Promise((resolve,reject)=>{
//     setTimeout(resolve,3000,'I am resolved')
// })
// p1.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

function getLaptop(isPassed){
    return promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolve("I got a Laptop")
            }
            else{
                reject("I have failed :(")
            }
        })
    })
}

getLaptop(false).then((res)=>{
        console.log(res)
}).catch((err)=>{
    console.log(err)
})