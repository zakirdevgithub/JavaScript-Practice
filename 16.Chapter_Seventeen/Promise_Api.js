const delay=(time)=>new Promise(resolve=>setTimeout(resolve,time*1000))

delay(1).then(()=> console.log('1 Second Delay'))
delay(5).then(()=> console.log('5 Second Delay'))
delay(2).then(()=> console.log('2 Second Delay'))
delay(3).then(()=> console.log('3 Second Delay'))

let res=Promise.resolve("Resolve")
res.then((r)=>console.log(r))

// let p1=Promise.resolve('One')
// let p2=Promise.resolve('Two')
// let p3=Promise.resolve('Three')
// let p4=Promise.resolve('Four')

let p1=new Promise(resolve=>{
    setTimeout(resolve,2000,"One")
})

let p2=new Promise(resolve=>{
    setTimeout(resolve,5000,"Two")
})

let p3=new Promise(resolve=>{
    setTimeout(resolve,3000,"Three")
})

let p4=new Promise(resolve=>{
    setTimeout(resolve,1000,"Four")
})


let promiseArray=[p1,p2,p3,p4]
Promise.all(promiseArray)
    .then(arr=>{
        console.log(arr)
    })

Promise.race(promiseArray)
    .then(arr=>{
        console.log(arr)
    })