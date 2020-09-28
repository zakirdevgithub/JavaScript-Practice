//Clouser means use a variable or anything in a Block from another Block
function outerFunction(){
    //Block 01
    let num=20
    function innerFunction(){
        //Block 02
        console.log(num) //Clouser
    }
    innerFunction()
}

outerFunction()
