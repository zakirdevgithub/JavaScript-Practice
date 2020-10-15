let selectInput=document.getElementById('name')

selectInput.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        document.getElementById('print').innerText=e.target.value
        e.target.value=''
    }
})