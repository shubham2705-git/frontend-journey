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
async function fetchdata2(){
    try{
        let response=await fetch("https://fakestoreapi.com/products");
        console.log(response)
        let final1=await response.json();
        console.log(final1);
        final1.forEach((el)=>{
            console.log(el.title)
            console.log(el.price)
        })
    } catch(error){
        console.log(error)
    }
}