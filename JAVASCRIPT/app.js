console.log(a)
// console.log(b) //reference error because of tdz (temporal dead zone)
// console.log(c)  // reference error because of tdz (temporal dead zone)
// temporal dead zone comes between declaration and initialization

// var is faster that's why it will get the chance to get the default value in the process of hoisting and because
// const and let is slow it will not get the chance to get the default because tdz(temporal dead zone) comes between 
// and hold the variable so tdz will hold the variable and web engine will unable to get it

// hoisting is the process of moving the declaration before the scope
// hoisiting done on all three keywords (let var const) but only var get the chance to
// declare as undefined because it is faster than let const

// Yes, correct. Before ES6 (ECMAScript 2015), JavaScript did not have let or const.
// There was essentially one way to declare variables:
// var x = 10;

// Before ES6
// var x = 10;

// var had:

// Function scope
// Hoisting
// Initialization to undefined during the creation phase
// No TDZ
//The purpose of let and const being uninitialized during the creation phase is mainly to prevent accidental use of a variable before its declaration.

/* var a = 10
let b = 20
const c = 30

{
    var i=12
    let j = 15
    const k = 22
    console.log(i)
    console.log(j)
    console.log(k)
}
console.log(i);   */
// console.log(j); reference error because of block scope
// console.log(k); reference error because of block scope

/* 
Types of function 
1. Simple function
2. Anonymous function
3. Arrow function 
*/

/*
Named function :::::::::::::::::::::::::::::::::::::::::::::::/\//\/\/\\/\\/\/\/\/\/\/\/\\//\/\\/\//\\/\///\/\
function addition(a,b){
    return a+b
}
console.log(addition(100,200));

let result = addition(20,30)
console.log(result) 

Anonymous Function ::::::::::::::::::::::::::::::::::::::::::/\/\//\\/\\\//\/\//\/\///\/\/\/\/\//\/\/\//\//\/\/
let anony = function(){
    console.log("Anonymous function")
};
anony();

Arrow Function :::::::::::::::::::::::::::::::::::::::::::::::/\/\\/\/\/\/\/\\/\/\/\//\/\\\//\/\//\/\/\/\/\//\/\
let arrow = () => {
    console.log("Arrow function")        
};
arrow();

Parameters :::::::::::::::::::::::::::::::::::::::::::::::::::/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\\/\/\/\\/\/\\/\//
let arrow2 = (a,b) => {
    console.log(a);
    console.log(b);
    console.log(arguments); // error
};
console.log(arrow2(100,200));

Characteristics :::::::::::::::::::::::::::::::::::::::::::::::::\//\/\/\/\/\/\/\/\/\/\\//\\\/\/\//\\/\/\//\\
1. No parameters :
    let noPara = () => {
            console.log("No parameters functions")
        }
    noPara();

2. Single Parameters :
    let singlePara = a => {
            console.log("Single Parameter function")
            console.log(a)
        }
    singlePara(100);

3. Multiple Parameters :
    let multiPara = (a,b,c) => {
            console.log("Multiple Parameter function")
            console.log(a+b+c)
        }
    multiPara(100,200,300);

4. Implicit return : returns the value automatically when we have one line expression
    let addition = (a,b,c) => a+b+c // single line expression
    console.log(addition(100,200,300));

5. Explicit return : when we are using return keyword explicitely and also when we have more than one line expression {} are mandatory
    let addition1 = (a,b,c) => {
        console.log(a)
        console.log(b)
        console.log(c)
        return a+b+c
    } 


Limitations : :::::::::::::::::::::::::::::::::::::/\//\/\/\/\/\/\/\///\/\/\\//\/\/\/\//\/\\/\//\/\/\/\//\/\
1 doesn't have arguments object
2 doesn't have it's own this keyword
3 cannot be used as constructor
*/

/*
Higher order function /\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\\/\/\/\/\/\/\/\//\/\/\//\\\//\/\/\/\/\/\/
* Function accepts another function as argument
ex :- function add(a, b){
        console.log(a+b)
    }
        add(10,20)

    function calculate
*/