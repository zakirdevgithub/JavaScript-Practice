let rect={
    width: 20,
    height: 10,
    rectangle:function(){console.log(this.width*this.height)}
}
rect.rectangle()

let square={
    width: 200,
    height: 200,
    square_draw:function(){console.log(this.width*this.height)},
    from_rect:rect.rectangle //// its from rect but width and height used from square
}
console.log('-----------------------------')
square.square_draw()
square.from_rect() // its from rect but width and height used from square