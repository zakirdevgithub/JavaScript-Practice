let select=document.getElementById('ul')
//Shallow Copy
let copyItem=select.lastElementChild.cloneNode()
copyItem.innerText='Five'
select.appendChild(copyItem)

//Deep Copy
let deepCopy=select.firstElementChild.cloneNode(true)
select.appendChild(deepCopy)