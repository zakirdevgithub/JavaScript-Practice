let createLi=document.createElement('li')
createLi.innerText='Five'
createLi.className='hiFive'
createLi.setAttribute('name','thisFive')
// console.log(createLi)
let selectUl=document.getElementById('ul')
selectUl.appendChild(createLi)

//-----------Make function for this------------
function customCreateElement(tagName,className,innerText,attr,attrValue){
    let tag=document.createElement(tagName)
    tag.innerText=innerText
    tag.className=className
    tag.setAttribute(attr,attrValue)
    return tag
}

function customAppend(parent,child){
    parent.appendChild(child)
}
let myTag=customCreateElement('li','six','Six','name','thisSix')
customAppend(selectUl,myTag)



