let selectTag=document.querySelector('li')
//Find Parent Element
console.log(selectTag.parentElement)

//Find Child Element
let anotherTag=document.querySelector('ul')
console.log(anotherTag.children)

//Find First Element Child
console.log(selectTag.firstElementChild) 
//null because selectTag store first li and before li there is no child of ul

//Find Next Sibling
console.log(selectTag.nextElementSibling)