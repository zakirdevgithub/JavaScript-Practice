//Must Run In Browser Console
async function getApi(){
    try{
        let result= await fetch('https://jsonplaceholder.typicode.com/users')
        let data=await result.json()
        let names=data.map(v=> v.name)
        console.log(names)
    }catch(e){
        console.log(e.message)
    }
}

getApi()

let promiseArray=[Promise.resolve('One'), Promise.resolve('Two'), Promise.resolve('Three')]

async function promiseAll(){
    let result=await Promise.all(promiseArray)
    console.log(result)
}
promiseAll()