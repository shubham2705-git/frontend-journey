// Object
// Ways to create object
// 1. BY USING LITERALS ::::::::::::::::::::::::::::
let obj = {
    name : 'Pawan kalyan',
    age:56,
    designation:'DCM',
    address:{
        state:'AP',
        city:'bapatla',
    } 
}
console.log(obj)
console.log(obj.name)
console.log(obj.age)
console.log(obj.address)
console.log(obj.address.state)
console.log(obj.address.city)

// Modify
obj.name="Akira"
obj.address.state="TS"

//Delete
delete obj.age
console.log(obj.age)


// 2. BY USING new KEYWORD :::::::::::::::::::::::::
let obj2 = new Object()
obj2.name='jsp'
console.log(obj2)