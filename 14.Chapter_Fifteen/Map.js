//Map can store any type of value and keys

let map=new Map([['a',10],['b',20],['c',30]])
console.log(map)
map.set({x:100,y:200},'Bangladesh')
console.log(map)
console.log(map.get('a'))
console.log(map.has('b')) //True
console.log(map.keys())
console.log(map.values())
console.log(map.size)
