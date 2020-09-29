//closure gives me access to an outer function’s scope from an inner function

for(let i=1; i<=5; i++){
    (function(n){
        setTimeout(function(){
            console.log(i)
        }, 1000*n)
    })(i)
}