let arr=[
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        
    ],
    [
       [10,20,30,40],
       [50,60,70,80]
    ],
]

//Print 70 from array
console.log(arr[1][1][2])

//Traversing
//sum all numbers
let sum=0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        for(let k=0; k<arr[i][j].length; k++){
            sum += arr[i][j][k]
        }
    }
}
console.log(sum)