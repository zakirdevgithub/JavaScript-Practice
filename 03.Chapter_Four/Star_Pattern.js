//-------------Pattern 01----------
/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

*/
for(let j=1; j<=5; j++){
    var str=" "
for(let i=1; i<=5; i++){
   
    str+=i+" "
}
console.log(str)
}

console.log("------------------------")

//-------------Pattern 02----------
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

for(let j=1; j<=5; j++){
    let str2=""
for(let i=1; i<=j; i++){
    str2 += i+" "
}
console.log(str2)
}

console.log("------------------------")

//-------------Pattern 03----------
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1 
*/

for(let j=5; j>=1; j--){
    let str2=""
for(let i=1; i<=j; i++){
    str2 += i+" "
}
console.log(str2)
}

