function outerFunction(){
    let OuterNumber=10 
    // This variable can be accessible from both 
    //outerFunction and innerFunction

    // console.log(InnerNumber) //it will show error

    function innerFunction(){
        let InnerNumber=50
    // This variable can be accessible from only innerFunction 
        console.log(OuterNumber)
    }
    innerFunction()
}

outerFunction()