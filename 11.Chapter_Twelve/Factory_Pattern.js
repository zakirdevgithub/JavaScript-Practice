let factory_pattern=function(width,height,length){
       return{
           width: width,
           height: height,
           length:length,
           draw_rect:function(){console.log(this.width*this.height)},
           draw_triangle:function(){console.log(0.5*this.length*this.height)}
       }

}

let fact=factory_pattern(100,200,300)
fact.draw_rect()