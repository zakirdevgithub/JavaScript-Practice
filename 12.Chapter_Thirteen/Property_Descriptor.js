// Descriptor is a object
//Property Descriptor help us to control object's property
//I can change Configure, Enumerable, Writable, make Default value etc

let obj={
    name:'Zakir'
}

//Run in browser console for proper view
let baseObject=Object.getPrototypeOf(obj)
console.log(baseObject)
//Object.getOwnPropertyDescriptor(ObjectName,'Key')
let descriptor=Object.getOwnPropertyDescriptor(baseObject,'toString')
console.log(descriptor)

console.log('-------------------------------')

//Custom Property Descriptor
// Object.defineProperty(ObjectName,'PropertyName', NewObject)
Object.defineProperty(obj,'name',{
    configurable:true,
    enumerable:true,
    writable: true,
    value:'Zakir Hossain Jewel'
})
//Object.getOwnPropertyDescriptor(ObjectName,'Key')
let myPropertyDescriptor=Object.getOwnPropertyDescriptor(obj,'name')
console.log(myPropertyDescriptor)
console.log(obj.name)


