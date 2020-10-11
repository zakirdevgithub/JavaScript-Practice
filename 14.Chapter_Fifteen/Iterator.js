let array=[1,2,3,4,5]
let str='Zakir'
//--------------- ES5 Iterator ------------
function IteratorFunction(collection){
    let index=0
    return{
        next(){
            return{
                done: index >= collection.length,
                value: collection[index++]

            }
        }
    }
}

let iterator=IteratorFunction(array)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

console.log('--------------------')

let iteratorStr=IteratorFunction(str)
console.log(iteratorStr.next())
console.log(iteratorStr.next())
console.log(iteratorStr.next())
console.log(iteratorStr.next())
console.log(iteratorStr.next())
console.log(iteratorStr.next())

console.log('--------- For ES6 -----------')

//--------------- ES6 Iterator ------------

let es6Iterator=array[Symbol.iterator]()
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())

console.log('--------------------')

let es6IteratorStr=str[Symbol.iterator]()
console.log(es6IteratorStr.next())
console.log(es6IteratorStr.next())
console.log(es6IteratorStr.next())
console.log(es6IteratorStr.next())
console.log(es6IteratorStr.next())
console.log(es6IteratorStr.next())