let obj={
    name:'Calculator',
    version:'0.0.1',
    firstNumer:10,
    secondNumber:20,
    calculate:function(){return this.firstNumer+this.secondNumber},
    msg:'Thank you'

}

console.log(obj.name)
console.log(obj.calculate())
