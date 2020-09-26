//Lets code for a remote controll car
let rigthButton=false
let leftButton=false
let downButton=false
let upButton=false

if(upButton){
    if(rigthButton){
        console.log("Go forward and turn right")
    }
    else if(leftButton){
        console.log("Go forward and turn left")
    }
    else{
        console.log("Go forward")
    }
}
else if(downButton){
    if(rigthButton){
        console.log("Go forward and turn left")
    }
    else if(leftButton){
        console.log("Go forward and turn right")
    }
    else{
        console.log("Go backward")
    }
}
else{
    console.log("Stop the car")
}




