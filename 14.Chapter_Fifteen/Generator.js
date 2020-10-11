function* generate(){
    yield 1
    yield 2
    yield 3
    yield 4
}

let iter=generate()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


let obj={
    start:1,
    end:5,
    // [Symbol.iterator]:function(){
    //     let currentValue=this.start
    //     let self=this
    //     return{
    //         next(){
    //             return{
    //                 done:currentValue>self.end,
    //                 value:currentValue>self.end ? undefined:currentValue++
    //             }
    //         }
    //     }
    // }

    [Symbol.iterator]: function*(){
        let currentValue=this.start
        while(currentValue<=this.end){
            yield currentValue++
        }
    }
}

let iterator=obj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
