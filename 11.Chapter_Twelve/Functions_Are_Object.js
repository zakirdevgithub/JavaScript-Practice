//Function's are special type of Object that can Execute
//Behind the scene every function execute as below 
let Obj=new Function('width','height','length', `this.width= width,
this.height= height,
this.length=length,
this.draw_rect=function(){console.log(this.width*this.height)},
this.draw_triangle=function(){console.log(0.5*this.length*this.height)}`)

let myObj=new Obj(200,100,300)
myObj.draw_rect()
console.log(myObj.constructor) //Anonymous Function