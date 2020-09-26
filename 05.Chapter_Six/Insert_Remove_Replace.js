let arr=[10,20,30]
//----------Insert value at last------------
arr.push(40)
console.log(arr)

//---------------Insert value at First---------------
arr.unshift(5)
console.log(arr)

//----------------Insert value at Specific Index---------------
//arr.splice(index number where i want to insert,
// from this index number to last how many item i want to delete,
// what number or numbers i want to insert)
arr.splice(1,0,15) 
// i want to insert 15 at index number 1 but dont want 
//delete this index item
console.log(arr)

let arr2=[14,22,31,42,32,78]
arr2.splice(2,3,10,20,30,56,90)
// i want to insert 10,20,30,56,90 at index number 2 and delete 3 
//items 31,42,32

console.log(arr2)


let arr3=[12,34,5,6,78,45]
//------------Remove from Last-----------
arr3.pop()
console.log(arr3)

//------------Remove from First-----------
arr3.shift()
console.log(arr3)

//------------Remove from Specific Index---------
// delete arr3[1] //it will delete value but cant remove index number
arr3.splice(2,1) // it will delete 1 item from index 2
console.log(arr3)

let arr4=[10,20,30,40,50,60]

//-----------Replace from a specific index------------
arr4.splice(3,1,80) // 3 number index delete 1 item and replace with 80
console.log(arr4)
