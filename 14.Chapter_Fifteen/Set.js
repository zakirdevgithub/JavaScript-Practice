
//Set is a array like collection but it neglect duplicate value.

let set=new Set([1,2,3,4])
console.log(set.has(4)) //True
set.add(5)
set.add(5)
set.add(6)
console.log(set)
console.log(set.size)
console.log(set.values())
console.log(set.keys())
console.log(set.entries())