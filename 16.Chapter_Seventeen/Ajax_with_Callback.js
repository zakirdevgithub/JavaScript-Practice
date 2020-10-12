// //Must Run On Browser Console
// const xhr=new XMLHttpRequest()
// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange=function(e){
//     if(xhr.readyState===4) { // 4 means ready
//         if(xhr.status===200) { // 200 menas all ok
//             console.log(xhr.response)
//         }
//         else{
//             console.log(xhr.status)
//         }
       
//     }

// }
// xhr.send()

//With Function
function getRequest(url, callBack){
    const xhr=new XMLHttpRequest()
    xhr.open('get',url) 
    
    xhr.onreadystatechange=function(e){
        if(xhr.readyState===4) { // 4 means ready
            if(xhr.status===200) { // 200 menas all ok
                let response=JSON.parse(xhr.response)
                callBack(null,response) // CallBack(error, result)
            }
            else{
                console.log(xhr.status, null) // CallBack(error, result)
            }
           
        }
    
    }
    xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/users',(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log(res)
    }
})