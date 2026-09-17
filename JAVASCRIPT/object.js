// Object

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
