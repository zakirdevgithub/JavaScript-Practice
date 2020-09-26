
//Finding Day
let date=new Date()
// Sunday=0, Monday=1, Tuesday=2 ----------
// console.log(date.getDay())

let today=date.getDay()
switch(today){
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Today is Monday")
        break
    case 2:
        console.log("Today is Tuesday")
        break
    case 3:
        console.log("Today is Wedesday")
        break
    case 4:
        console.log("Today is Thrusday")
        break
    case 5:
        console.log("Today is Friday")
        break
    case 6:
        console.log("Today is Satday")
        break
    default:
        console.log("Sorry number is invalid")
        break
    
}
