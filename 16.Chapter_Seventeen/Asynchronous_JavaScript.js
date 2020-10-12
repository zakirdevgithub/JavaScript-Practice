console.log("This is line one") //Step 1: it run in "Call Stack"
setTimeout(()=>{ // Step 2: It will go in "Web Api" because it is asynchronous
    console.log("This is line two")
},2000)

console.log("This is line three") // Step 3: It will run in "Call Stack"

//Step 4: setTimeout pass in "Callback/Task Queue"
//Step 5: "Event Loop" pass setTimeout in "Call Stack"