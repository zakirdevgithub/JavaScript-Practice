let i=0;
while(i<100)
{
    let randomNumber=Math.round((Math.random()*100)+1)
    if(i==randomNumber){
        console.log("Random number matched with i")

    }
    else{
        console.log("Random number is not matched with i")
    }
    i++;
}