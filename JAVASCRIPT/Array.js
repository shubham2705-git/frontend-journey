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