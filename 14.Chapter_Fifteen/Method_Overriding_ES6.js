class Father{
    constructor(eyecolor){
        this.eyecolor=eyecolor
    }
    money(){
        console.log('10 million Dollar')
    }
}

class Son extends Father{
    constructor(eyecolor,height, weight){
        super(eyecolor)
        this.height=height
        this.weight=weight
    }

    //This money method will override father class money method
    money(){
        console.log('50 million Dollar')
    }
}

let s= new Son('Brown',5.6,80)
s.money()