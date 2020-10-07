let Constructor_pattern=function(width,height,length){
   
    this.width= width,
    this.height= height,
    this.length=length,
    this.draw_rect=function(){console.log(this.width*this.height)},
    this.draw_triangle=function(){console.log(0.5*this.length*this.height)}

}

// let obj=new Constructor_pattern(200,100,300)
// obj.draw_rect()

//--------------Custom New Keyword-------------------
function myNew(constructor){
    let obj={}
    //Object.setPrototypeOf(target, from)
    Object.setPrototypeOf(obj,constructor.prototype)
    //Associate arguments with array
    let argsArray=Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArray.slice(1)) 
    // 1 for arguments because 0 for constructor (myNew(constructor))
    
    return obj
}
let myObj=myNew(Constructor_pattern,200,100,300)
myObj.draw_rect()