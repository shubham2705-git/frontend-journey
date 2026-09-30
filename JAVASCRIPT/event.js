// let h1=document.querySelector('h1')
// console.log(h1)

// //addEventListener('event',Callback,usecapture)

// // h1.addEventListener('click',()=>{
// //     console.log("you clicked on h1")
// // })

// // h1.addEventListener('click',()=>{
// //     console.log("you clicked twice on h1")
// // })

// // h1.addEventListener('click',()=>{
// //     console.log("you clicked thrice on h1")
// // })

// // h1.addEventListener('click',()=>{
// //     console.log("Stop clicking on h1")
// // })

// let form = document.querySelector('form')
// let input = document.querySelector('input')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(input.value);
//     console.log("form submitted successfully");
// })
// form.addEventListener('input',()=>{
//     console.log(input.value);
// })

// form.addEventListener("change",()=>{
//     console.log(input.value);
// })

// document.body.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
//     console.log("right click menu is disabled")
// })

let div=document.querySelector('div')
let section=document.querySelector('section')
let btn=document.querySelector('button')

div.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('div is clicked')
})

section.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('section is clicked')
})

btn.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('button is clicked')
})

