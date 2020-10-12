//Must Run in  Browser Console
function getRequest(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
    xhr.open('get',url) 
    
    xhr.onreadystatechange=function(e){
        if(xhr.readyState===4) { // 4 means ready
            if(xhr.status===200) { // 200 menas all ok
                let response=JSON.parse(xhr.response)
                resolve(response)
            }
            else{
                reject(new Error("Data not found or Error"))
            }
           
        }
    
    }
    xhr.send()
    })
}

getRequest('https://jsonplaceholder.typicode.com/users')
    .then((data) =>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })