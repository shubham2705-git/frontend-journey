// // PROMISE ::=============================================================================================
// let p1=new Promise((res,rej)=>{
//     let a=100;
//     if(a==10){
//         res("promise resolved")
//     }else{
//         rej("promise rejected")
//     }
// })
// console.log(p1)//returns state of promise with value

// //to consume or handle promise we need then() and catch()
// p1.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })

// let p2=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolved")
//     },2000)
// }).then((msg)=>console.log(msg))
// .catch(err=>console.log(err))


// TYPES OF PROMISES:=====================================================
// 1. any()
// 2. all()
// 3. allSettled()
// 4. race()


// FETCH :===================================================
// let fetchData=fetch("https://fakestoreapi.com/products");
// fetchData
//    .then((response)=>{
//     console.log(response)
//     return response.json();
//    })
//    .then((finalData)=>{
//     console.log(finalData)
//     finalData.forEach(el=>{
//         console.log(el.title)
//         console.log(el.price)
//     });
//    }).catch(err=>console.log(err))

// async & await ==================================
// async function fetchdata2(){
//     try{
//         let response=await fetch("https://fakestoreapi.com/products");
//         console.log(response)
//         let final1=await response.json();
//         console.log(final1);
//         final1.forEach((el)=>{
//             console.log(el.title)
//             console.log(el.price)
//         })
//     } catch(error){
//         console.log(error)
//     }
// }

//DESTRUCTURING :=========================================

// extracting/unpacking the values form object or array

// let arr = [10,20,30,40,50]
// let a=arr[0]
// let b=arr[1]
// let [a,b,c,d,e]=arr
// let[a,,,d,e]=arr //to skip values use,(comma)
// console.log(a)
// console.log(d)
// console.log(e)

//Nested array:
// let arr1=[10,[20,[30],40],50]; //without flat method
// //let [a,[b,[c],d],e]=arr1
// console.log(a)
// console.log(b)
// console.log(c)

// OBJECT :================================
// let student={
//     name1:"rahul",
//     age:23,
//     email:"rahul@gmail.com",
//     pswd:423412352134,
//     address:{
//         state:'ka',
//         city:'blr',
//         pincode:560076
//     }
// };
// let {name1,email,address:{state,city}}=student
// let {state,city}=student.address
// console.log(name1)
// console.log(email)
// console.log(state)

// SPREAD OPERATOR:(...)===============================================
// ARRAY
// let arr=[10,20,30,40,50]
// console.log(arr)
// console.log(...arr)

// OBJECT :
// console.log(...Object.keys(student))
// console.log(...Object.values(student))

// FUNCTION :
// function demo(a,b,c){
//     console.log(a+b+c)
// }
// demo(...arr)

//REST OPERATOR(...) :======================================================
// ARRAY
// let [a,b,...args]=arr;
// console.log(a)
// console.log(b)
// console.log(args)

//  FUNCTION :===================
// let arr2 = [10,20,30,40,50,60,70,80]
// function add(a,b,c,...args){
//     console.log(a+b+c)
//     console.log(args)
// }
// add(...arr2)

// OBJECT :
// let {name1, age, ...details}=student
// console.log(name1, age)
// console.log(details)


// MERGE TWO ARRAY :====================
// let a = ['a','b','c']
// let b = [10,20,30]
// let c = [...a, ...b]
// console.log(c)


// MERGE TWO OBJECTS :========================
// let obj1={
//     name:'abcd',
//     age:22
// }
// let obj2={
//     skills:['js','html'],
//     email:'abc@gmail.com'
// }
// let res=Object.assign({},obj1,obj2)
// console.log(res)

// let res1 = {...obj1,obj2}
// console.log(res1)


let a = [10,20,30]
let b = a
b[0]=1000
console.log(a)
console.log(b)

