let selectButton=document.getElementById('btn')
selectButton.addEventListener('click',function(e){
    alert('Hello button clicked')
})

let selectBox=document.getElementById('box')
selectBox.style.height='100px'
selectBox.style.width='300px'
selectBox.style.background='green'
selectBox.addEventListener('mousemove',function(e){
    // console.log(e.clientX)
    // console.log(e.clientY)
    console.log(e.offsetX)
    console.log(e.offsetY)
})