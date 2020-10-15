let selectSecondList=document.getElementById('ul').firstElementChild.nextElementSibling
selectSecondList.setAttribute('style','color:red;')
console.log(selectSecondList.attributes)
console.log(selectSecondList.getAttributeNames())
console.log(selectSecondList.getAttributeNode('style'))
console.log(selectSecondList.getAttribute('style'))

console.log(selectSecondList.style)

let attr=document.createAttribute('title')
attr.value='This is attribute'
selectSecondList.setAttributeNode(attr)