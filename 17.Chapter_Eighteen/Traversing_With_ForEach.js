let selectTag=document.getElementsByTagName('li')
//Process One
// let selectTags=Array.from(selectTag)

//Process Two
// let selectTags=Array.prototype.slice.apply(selectTag)

//Process Three
// let selectTags=[...selectTag]
// selectTags.forEach((e,index)=>{
//     let text=e.innerHTML
//     e.innerHTML=`${index+1}. ${text}`
// })

//---------------- With querySelector -----------
let tags=document.querySelectorAll('li')
tags.forEach((e,index)=>{
    let text=e.innerHTML
    e.innerHTML=`${index+1}. ${text}`
})