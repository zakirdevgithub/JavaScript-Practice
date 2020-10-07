let person=function(name,age,height){
    this.name=name
    this.age=age
    this.height=height
    //salary is private
    let salary={
        basic:undefined,
        bonus:undefined
    }
    //totalSalary is private
    let totalSalary=function(){
        console.log(salary.basic+salary.bonus)
    }

    this.displayInfo=function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.height)
        totalSalary()
    }

    //Getter and Setter
    // Object.defineProperty(ObjectName,'PropertyName', NewObject)
    Object.defineProperty(this,'salary',{
        get:function(){
            return salary
        },
        set:function(value){
            salary=value
        }
    })

}
let pr=new person('Zakir Hossain',25,5.6)
// pr.displayInfo()

pr.salary={
    basic:20000,
    bonus:2500
}
pr.displayInfo()