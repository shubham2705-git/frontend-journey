/* 
Array : \//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\

create ::::
let arr = [10,20.4,true,"jsp",'a',()=>{},[],{},null,undefined]

Read: \//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr.length)
console.log(arr[200])

Update : \//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
arr[0]="jspiders"
arr[3]=1000
console.log(arr)

Delete :\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
delete arr[0]
delete arr[1]
console.log(arr)

let arr2 = [10,20,30]
arr[100] = "Rahul"
console.log(arr2.length)

By using new keyword : \//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
let arr3 = new Array(10,20,30,"true",true,{})
console.log(arr3)

let arr4 = new Array(10)  if we give single value in the parameter then it will act as the length
console.log(arr4.length) // 10

*/

//\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
/*
Array Methods :\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
Mutating Methods : \//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\\//\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\///\/\/\/\//\/\
let arr = [10,20,30,40,50]
arr.push(60,70,80)

1: push :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
It is used to add the elements to the end of the array and
it will return the length of the array
console.log(arr.push(60))
console.log(arr) // 10,20,30,40,50,60,70,80
console.log(arr.length) // 8

2: pop() ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let arr = [10,20,30,40,50]
arr.pop()
arr.pop()
arr.pop(3) // remove only one last element
console.log(arr)

3: unshift() :: add the elements at starting ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let arr = [10,20,30]
arr.unshift(100,200,300) // add the elements at starting
console.log(arr)

4: shift() :: delete first element from starting ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
arr.shift() // delete first single element from starting
arr.shift()
arr.shift(4) // value doesnt matter, delete first element from starting
console.log(arr)

5: splice (Starting index, deleteCount, adding elements) ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let arr1= {10,20,30,40,50}
console.log(arr1.splice(2)) // 30,40,50 will be deleted
console.log(arr1.splice(2,2))
console.log(arr1.splice(3,2,100,200,300)) // 40,50
console.log(arr1.splice(1,2,90,80,100)) // 10,90,80,100,40,50
console.log(arr1.splice(2,0,60,70,80,90,100)) // 10,20,60,70,80,90,100,30,40,50


*/