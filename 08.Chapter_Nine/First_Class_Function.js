/*
----------------Conditions----------
1. A Function can be stored in a Variable
2. A Function can be stored in a Array
3. A Function can be stored in a Object
4. We can create function as need
*/

// 1. A Function can be stored in a Variable
function add(x,y){
    return x+y
}

let myVar=add // function stored in a variable
console.log(myVar(10,20))


//2. A Function can be stored in a Array
function sub(x,y){
    return x-y
}
let arr=[]
arr.push(sub) //Function stored in a Array
console.log(arr[0](30,10))

//3. A Function can be stored in a Object
let obj={
    name:'Zakir Hossain',
    age:25,
    func:function(greet,person){ //Function stored in an Object
        console.log(greet,person)
    }
}

obj.func('Good Morning','Keya')

//4. We can create function as need
setTimeout(function(){
    console.log("This is example of we can create function as need")
},2000)