setTimeout(function(){
    console.log("Sorry for 5 seconds late")
}, 5000)

function outerFunction(country, capital){
    function innerFunction(){
        console.log(country, capital)
    }
    innerFunction()
}

outerFunction('Bangladesh','Dhaka')
outerFunction('America','Washington DC')

function greetings(greet,fullName){
    function message(){
        console.log(greet, fullName.split(' ')[0])
    }
    message()
}

greetings("Good Evening","Zahid Hasan")


