let Constructor_pattern=function(width,height,length){
   
        this.width= width,
        this.height= height,
        this.length=length,
        this.draw_rect=function(){console.log(this.width*this.height)},
        this.draw_triangle=function(){console.log(0.5*this.length*this.height)}
 
}

let obj=new Constructor_pattern(200,100,300)
obj.draw_rect()