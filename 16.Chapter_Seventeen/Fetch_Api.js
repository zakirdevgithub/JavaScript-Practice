//Must Run In Browser Console
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then((data) =>{
        console.log(data)
        return Promise.resolve("Hello this is also a promise. Resolve with then")
    })
    .then((str)=>{
        console.log(str)
        return Promise.resolve("This is another Promise")
    })
    .then((last)=>{
        console.log(last)
    })
    .catch((err)=>{
        console.log(err)
    })