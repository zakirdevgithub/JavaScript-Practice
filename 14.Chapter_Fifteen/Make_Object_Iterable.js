let obj={
    start:1,
    end:5,
    [Symbol.iterator]:function(){
        let currentValue=this.start
        let self=this
        return{
            next(){
                return{
                    done: currentValue > self.end,
                    value: currentValue > self.end? undefined: currentValue++
                }
            }
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