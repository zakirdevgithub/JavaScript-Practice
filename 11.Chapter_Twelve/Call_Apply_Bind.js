//Call, Apply, Bind help us to  pass object as argument
function test(a,b){
    console.log(this.x+this.y+a+b)
}

// test(10,20) //NaN 

//--------------Call---------------
test.call({x:5,y:6},10,20)

//--------------Apply-------------
test.apply({x:50,y:60},[100,200])

//-------------Bind-------------
//Bind help us to store result

//Process 01
let result=test.bind({x:500,y:600},1000,2000)
result()

//Process 02
let result2=test.bind({x:500,y:600})
result2(5000,4000)
