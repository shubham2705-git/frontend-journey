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

// let h2=document.createElement("h2");
// h2.setAttribute("id","span")
// span.textContent="I am span inside div tag"
// span.style.display="none"
// div.append(h2,p1,span)

// // Differences :====================================
// div.appendChild(p1)
// div.append(h1,p1,span)

// div.appendChild("this is from appendCHild"); // throws error
// div.append("this is from append");
// let div=document.querySelector(".batch.a53")
// for(let i=1;i<=50;i++){
//     let button=document.createElement("button")
//     button.innerText=" This is Button "+i;
//     div.append(button)
// }
// for(let i=1;i<=100;i++){
//     let h=document.createElement("h1")
//     h.innerText="Head "+i;
//     div.append(h)
// }
// for(let i=1;i<=200;i++){
//     let p=document.createElement("p")
//     p.innerText="para "+i;
//     div.append(p)
// }

// let div1=document.createElement('div')
// div1.textContent="i am div tag from js file"
// div1.setAttribute('class','batch')
// div1.setAttribute('class','a53') // it will override previous class
// div1.removeAttribute('class')
// console.log(div1)

// document.body.appendChild(div1)
// div1.remove()

// // classList :=====================================================================================================
// let div2=document.createElement("div")
// div2.textContent="i am div tag from js file"
// div2.classList.add('batch')
// div2.classList.add('a53')
// div2.classList.add('js')

// div2.classList.remove('a53')
// div2.classList.replace('js','a53')
// console.log(div2)
// document.body.appendChild(div2)


