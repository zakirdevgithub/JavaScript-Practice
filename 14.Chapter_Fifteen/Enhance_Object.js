
let a=10, b=20
//----------- Normal Object -----------
let normalObject={
    a:a,
    b:b,
    show:function(){
        console.log('Hello JavaScript')
    }
}
console.log(normalObject)
normalObject.show()

//---------- Enhance Object -------------
let enhanceObject={
    a,
    b,
    show(){
        console.log('This is from enhance object')
    }
}
console.log(enhanceObject)
enhanceObject.show()