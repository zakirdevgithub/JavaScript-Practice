let select=document.getElementById('ul')

let selectBox=document.getElementById('btn')
selectBox.addEventListener('click',function(e){
    let tag=select.lastElementChild.cloneNode()
    tag.innerHTML='New Item'
    select.appendChild(tag)
})

//--------Event Delegation Problem--------------
// let selectChildren=document.getElementById('ul').children
// let selectChildrens=Array.from(selectChildren)
// selectChildrens.forEach(e=>{
//     e.addEventListener('click',function(e){
//         console.log(e.target.remove())
//     })
// })

//------------ Solve Delegation Problem ------------
select.addEventListener('click',function(e){
    if(this.contains(e.target)){
        e.target.remove()
    }
})