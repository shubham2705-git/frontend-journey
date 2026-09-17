// Object
// Ways to create object
// 1. BY USING LITERALS ::::::::::::::::::::::::::::
/*
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
*/

/*
// 2. BY USING new KEYWORD :::::::::::::::::::::::::
let obj2 = new Object()
obj2.name='jsp'
obj2.age=43
console.log(obj2)
*/    


/*
// 3. BY USING CONSTRUCTOR FUNCTION ::::::::::::::::::
function person(name,salary,role){
    this.name = name;
    this.salary = salary;
    this.role = role;
}
let p1 = new person("rahul",25000,"JSDeveloper");
let p2 = new person("saruav",15000,"JavaDeveloper");
let p3 = new person("amit",35000,"SQlDeveloper");
console.log(p1)
console.log(p2)
console.log(p3)
*/

/*
// 4. USING class KEYWORD :::::::::::::::::::::::::::
// es6 version
class Student{
    constructor(name,salary,role){
        this.name = name;
        this.salary = salary;
        this.role = role;
    }
}
let s1 = new Student("dev",23000,"developer")
let s2 = new Student("tatha",26000,"talking person")
console.log(s1)
console.log(s2)
*/

// Object methods are static methods :::::::::::::::::::::::::::::::::;
let obj = {
    name : 'Pawan kalyan',
    age:56,
    designation:'DCM',
    address:{
        state:'AP',
        city:'bapatla',
    } 
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

let std1 = {
    name : 'jsp',
    branch :'btm'
}
let std2 = {
    age : 23,
    location :'btm'
}

// Merge two objects
// assign(target,sources)
console.log(Object.assign(std1,std2))
console.log(Object.assign({},std1,std2))

//seal() :::::::::::::::::::::::;;
Object.seal(std1)
std1.name='qsp'

std1.loc='blr'

delete std1.name
console.log(std1)

//freeze() :::::::::::::::::::::::::::::
Object.freeze(std1)
std1.name='qsp'
std1.loc='blr'
delete std1.name
console.log(std1)

// isSealed() ::::::::::::::::::::::::;;;
console.log(Object.isSealed(std1))

// isFrozen() :::::::::::::::::::::::::;;;
console.log(Object.isFrozen(std1))