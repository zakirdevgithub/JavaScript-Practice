let asyncIterable={
    [Symbol.asyncIterator](){
        let i=0
        return{
            next(){
                if(i<5){
                    return Promise.resolve({
                        value:i++,
                        done:false
                    })
                }else{
                    return Promise.resolve({
                        done:true
                    })
                }
            }
        }
    }
}

let iterator=asyncIterable[Symbol.asyncIterator]();

(async function(){
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
})()

