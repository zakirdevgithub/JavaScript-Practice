let select=document.getElementById('ul')
let li=document.createElement('li')
li.innerText='Five'
setTimeout((e)=>{
    //Update
    select.appendChild(li)
    //Remove
    select.firstElementChild.remove()
},3000)