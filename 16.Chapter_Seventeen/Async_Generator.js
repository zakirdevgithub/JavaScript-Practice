async function* generatorFunction(){
    let i=0
    while(true){
        if(i>5){
            return
            
        }else{
            yield await Promise.resolve(i++)
        }
        
    }
}

;(async function(){
    for await (let v of generatorFunction()){
        console.log(v)
    }
})()