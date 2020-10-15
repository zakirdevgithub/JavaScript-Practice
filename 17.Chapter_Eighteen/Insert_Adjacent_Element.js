//We can add only one Element with insertAdjacentElement
let selectItem=document.getElementById('ul')
let div=document.createElement('div')
div.innerHTML='<p>Hello This is paragraph</p>'
selectItem.insertAdjacentElement('beforebegin',div)
selectItem.insertAdjacentElement('afterbegin',div)
selectItem.insertAdjacentElement('afterend',div)
selectItem.insertAdjacentElement('beforeend',div)
