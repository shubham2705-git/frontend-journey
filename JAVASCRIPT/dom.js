//2. document.getElementsByClassName(): It returns HTMLCOllection which is similar to array but not original
// array and we can access elements by using index values.

// let p = document.getElementsByClassName("para")
// console.log(p)
// console.log(p[0].innerHTML)
// console.log(p[1].textContent)

//3. document.getElementsByTagName('tag'): It returns HTMLCollection which is similar to array but not=============================================
// original array and we can access elements by using index values.

//let allParas = document.getElementsByTagName('p')
// console.log(allParas)

// 4. document.querySelector('css selector');===========================================================================
// let h11 = document.querySelector("#dom")
// console.log(h11)

// let p1 = document.querySelector('.para')
// console.log(p1)

// 5. document.querySelectorAll('css selector'): It returns NodeList which is similar to array but not original array =====================================================
// and we can access elements by using index values and forEach()
// let paras=document.querySelectorAll('.para')
// console.log(paras)
// console.log(paras[0].textContent)

// paras.forEach(()=>{
//     console.log(el.textContent)
// })

// MODIFY ======================================
// let h1=document.querySelector('h1')
// h1.textContent="Document Object Model"

// let paras=document.querySelectorAll('.para')
// console.log(paras)
// para[3].textContent="btm Jspiders"

// CSS STYLINGS :=====================================
// let h1=document.querySelector('h1')
// h1.style.backgroundColor="blue"
// h1.style.color="white"
// h1.style.fontSize="40px"
// h1.style.fontFamily="sans-serif"


// document.createElement('tag')=========================================
// let h1=document.createElement("h1")
// h1.textContent="DOM";

// // Attribute:
// h1.setAttribute("id","dom")
// console.log(h1)
// document.body.appendChild(h1)

// let p=document.createElement("p")
// p.textContent="document object model"
// document.body.appendChild(p)

// let div=document.createElement("div");

