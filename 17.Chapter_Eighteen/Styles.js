let select=document.getElementById('heading')
select.style.color='red'
select.style.background='rgb(0,255,0)'

let styleObj={
    background:'black',
    color:'red',

}

let selectUl=document.getElementById('ul').firstElementChild
Object.assign(selectUl.style,styleObj)