/*
1.Every object has a constructor property
2.If a function need to create an Object then the refference of this function is called
Constructor Property of this Object
*/
let Constructor_pattern=function(width,height,length){
   
    this.width= width,
    this.height= height,
    this.length=length,
    this.draw_rect=function(){console.log(this.width*this.height)},
    this.draw_triangle=function(){console.log(0.5*this.length*this.height)}

}

let myObject=new Constructor_pattern(200,100,300)
console.log(myObject.constructor) //It will show full Constructor_pattern function

let obj={}
console.log(obj.constructor) //It will print 'native code' because it is builtin

//Run in browser console for proper view