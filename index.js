//* 1. Questions
var show = 1;
console.log(show);
function show() {
  console.log("🧑🏿‍🎄");
}
console.log(show); //1 ,1

//* 2. Questions
// let array=[3,5,3,2,8,6,9,11,1]

//  console.log(array[array.length-1])//1
// console.log(array.at(-1))//1
// console.log(array.at(-2))//11

//* 3. Questions
// (async function () {
//     const data = await 1;
//     console.log(data)
// })()
// console.log(2)

//     (function () {
//         console.log("Hello")

// })()

//* 4. Questions
// console.log(new Array(1, 2));
// console.log(Array(2))

//* 5. Questions
// function animal() { }
//     animal.prototype.home=()=> {
//         console.log("Forest 🌳");
//     }
// function Bird() { }
//         Bird.prototype =Object.create(animal.prototype)

//     const bird = new Bird()
//     bird.home();

//* 6. Questions
// if(NaN)
// {
//     console.log("Success");
// }
// else {
//     console.log("Fail")
// }
// console.log(NaN == NaN);
// console.log(NaN === NaN)
// console.log(Object.is(NaN, NaN));
//////////////////////////////////////////////////////////////////////

// function OTP() {
//     let otp = ""
//     otp = Math.floor(Math.random() * 9000 + 1000);
//     return otp;
// }
// console.log("Your OTP",OTP())
// let random = Math.floor(Math.random() * 9000 +1000);
// console.log("Your  OTP",random)
//////////////////////////////////////////////////////////////////////

// async function FetchData() {
//     return 1;
// }
// FetchData().then((data) => {
//      console.log(data)
//  })
//////////////////////////////////////////////////////////////////////

// const object = { Name: "Aashif" };
// const arr = ["Name"]
// object[arr] = "Node.js";
// console.log(object.Name);

// const { length } = "JS"
// console.log(length)
//////////////////////////////////////////////////////////////////////

// [1,2,3,4,5].forEach(element => {
//     console.log(element);
//     return;
// });
// const n = 10;
// const n1 = "2"
// console.log(n - n1);
// console.log(n+n1)
//////////////////////////////////////////////////////////////////////

// const array = [10, 20, 30, 40, 50];
// array.forEach(function (num) {
//     console.log(num)
//     if (num === 3) {
//         array.length = 0;

//     }
// })
//////////////////////////////////////////////////////////////////////

// const p = new Promise(resolve => {
//          resolve("Done")
// })
//   p.then(() => {
//     return 55;
//   })
//   .then(data => {
//     console.log(data);
//   });
//////////////////////////////////////////////////////////////////////

// let array = [10, 20, 30, 40, 50];
// let reverse = array.toReversed();
// console.log(reverse);
// console.log(array);
//reverse=It will mutate original array
// toReversed= it will not mutate original array
//////////////////////////////////////////////////////////////////////

// Promise.resolve("🍊").then(data => {
//   console.log(data);
// });
//////////////////////////////////////////////////////////////////////

// function text() {
//     const a = b = c = "🍊";
// } text();
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
//////////////////////////////////////////////////////////////////////

// new Promise(resolve => {
//   resolve("🥚");
//     Promise.resolve().then(() => {
//     console.log("🐔");
//   })
// }).then(data => {
//   console.log(data);
// });

// let input = document.getElementById("todo");

// const url = "https://dummyjson.com/todos/1";

// const response = await fetch(url);
// const data = await response.json();
// console.log(data.todo)
// const span = document.getElementById("dpan");
// span.textContent=`${data.id}.`
// input.textContent = `${data.todo}`;
//////////////////////////////////////////////////////////////////////

// const getLion =async () => {
//     return "🦁"
// }
// const lion = await getLion();
// console.log(lion=== "🦁")
//////////////////////////////////////////////////////////////////////

// function sum(a = 20, b = 80) {
//     console.log(a+b)
// }
// sum(undefined,88);
//////////////////////////////////////////////////////////////////////

// const finalscore = 1 + Score;
//  const Score = 90;
// console.log(finalscore)
//////////////////////////////////////////////////////////////////////

// console.log(false == [[[[[[0]]]]]]);
// console.log(false == "0");
// const Lang = "Lang"
// const key="version"
// const object = {
//     [key]:"Aashif khan",
//     Lang,
//     age: 33,
//     get: function(){}
// }
// console.log(object)

////////////////////////////////////////////////////////
//* Interview
// let count = 0;
// const array = [0, 1,2,3,4];
// array.forEach((item) => {
//     if (item) {
//         count = count + 1;//count++; both are same;
//     }
// })
// console.log(count);
// const array = [10, 20, 30, 40, 50];
// let new_arr= array.slice(0, 2);
// console.log(array)
// console.log(new_arr)

// const arr = [2, 3, 4, 5]
// arr.splice(0, 1);
// arr.unshift(8);
// console.log(arr);//8,3,4,5

// const object = {
//     a: 1,
//     b: 2,
//     c: 3,
//     "a": 6,
//     b: 7,
//     c:10
// }
// console.log(object)//[a:6,b:7,c:3]
//! Notes: Because of datatype of key string if write inside the qot or without both are follow same datatype

// console.log(!"Aashif");
// console.log(+false)
// console.log(typeof(+false));
/////////////////////////////////////////////////////////////////
// console.log("" == false);
// console.log("" === false);
// console.log(NaN ==NaN)
// console.log(NaN === NaN)
// console.log(1 / "a")//NaN
// console.log(0 / 0)//NaN
// console.log(typeof typeof typeof 1000);
// console.log(typeof typeof typeof typeof ("aashif"));
// let arr = [10, 20, 30, 40, 50];
// arr[10] = 100;
// console.log(arr)
///////////////////////////////////////
// function myfun() {
// "use strict"
//     xyz = 100
//     console.log(xyz)
//     return xyz;
// }
// console.log(myfun());
/////////////////////////////////////////////////
// var xyz = 1 + abc;
// abc = 100;
// console.log(xyz)
/////////////////////////////////////////////
// const data = {
//     Name: "Nabil",
//     }

// const abc = [1, 2, 3, 4]
// console.log(delete data.Name);
// console.log(data)
// console.log(delete abc)
// console.log(delete abc[1]);
// abc.splice(2,0,30)
// console.log(abc)
/////////////////////////////////////////////////////
// const abc = [1, 2, 3, 4]
// delete abc[3]
// console.log(abc)
/////////////////////////////////////////////////////////////////
// const abc = [1, 2, 3, 4]
// const [x, y] = abc
// console.log(x, y);
// const a = []
// const b=[]// b=a; true both case
// console.log(a == b)
// console.log(a===b)
////////////////////////////////////////
// const array = [1, 2, 3, 4, 5, 6]
// const even = array.filter( function(num){
//     return num % 2 === 0;
// })
// console.log(even);
//////////////////////////////

// let arr = [1, 2, 3, 4][5, 6, 7, 8];
// console.log(arr)
// let array = [5, 6, 7, 8][0, 1,2,3];
// console.log(array)

// const object = {
//     1: "a",
//     2: "b",
//     "2": "b",
//     [1]:"b"
// }
// console.log(object)
// const array = [1, 2, 3, 4, 5];

// let result=array.map((item)=> {
//     if (item <4) {
//         return item;
//     }
//     else
// {
//         return 0;
// }
// });

//  funconsole.log(result);
/////////////////////////////////
// {
//     function fun() {
//         console.log("I am inside the blocked scope to this block")
//     }
//     // fun();
// }
// fun();
// "use strict"
// var a = 100;
// let b = 200;
// c = 600;
// console.log(c);
////////////////////////////////////
// function fun(){
//     return 500;
// }
// var fun;
// console.log(fun);
///////////////////////////////////////
// let a = 50;
// let result = (a > 40) ? "True" : "false"
// console.log(result)
// let array = [10, 20, 30, 40, 50]

// "use strict"
// {
//   function fun() {
//     console.log("Aashif")
//   }
// }
// fun();
/////////////////////////////////////////////
// const array=[10, 20, 30, 40, 50];
// let result = array.reduce((acc, value) => {
//   return acc + value;
// },10)
// console.log(result)

// console.log("A"-1)
// let array = [10, 30, 50, 20, 40]
// let result = array.sort((a, b) => (a - b));
// console.log(result)

// let str1 = "abcd";
// let str2 = "123"
// let result = "";
// let maxlength =Math.max(str1.length, str2.length);
// for (let i = 0; i < maxlength; i++){
//   if (i < str1.length) {
//     result += str1[i];
//   }
//    if (i < str2.length) {
//      result += str2[i];
//    }

// }
// console.log(result)
//////////////////////
// const a = {}
// const b = { name: "Aashif" }
// const c = { name: "taseen" }
// a[b] = { name: "aadil" };
// a[c] = { name: "Hello World" };
// console.log(a[b]);

// const y = 0;
// const z = false;

// console.log(y == z);
// console.log(y === z);
//////////////////////////////////////////////
// let a = null;
// let b = undefined;
// console.log(a == b);
// const a = 1;
// const b = true;
// console.log(a == b);
// console.log(a===b)
// const a = "5";
// const b = 5;
// console.log(a == b)
// console.log(a===b)

// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(undefined==NaN)

// const array = [1, 2, 3, 4, 5];
// let result=array.map((item) => {
//   return item > 2;
// })
// console.log(result)
//////////////////////////////////////////////
// let arr = [1, 2, 3, 4];
// arr.splice(0,0,50)
// console.log(arr)
////////////////////////////////////////////////
// const array = [1, 2, 3, 4, 5];
// array.fill(55);
// console.log(array);
///////////////////////////
// const arr = [1, 2, 3, 4, 5, 6];
// arr.copyWithin(0,3)
// console.log(arr);
/////////////////////////////////////////////////
// const arr = [20, 10, 30, 50, 40];
// let result = arr.sort();
// console.log(result)
//////////////////////////////////////////////////
// let array = [1, 2, 3, 4]
// array.unshift(10);
// console.log(array)
///////////////////////////////////////////////
// let = array = [1, 2, 3, 4, 5];
// array.shift();
// console.log(array)
///////////////////////////
// let a = 10;
// function text() {
//   a++;
// console.log(a)
// }
// text();
//////////////////////////////////////////////
// function outer() {
//   const text = "I am from the outer function";
//   function inner() {
//     console.log(text);
//   }
//   return inner;
// }
// outer()();
//////////////////////////////////////////////
// function curring(a) {
//   return function(b) {
//     return function(c) {
//       return function(d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }
// console.log(curring(2)(2)(2)(2))

// function curring(a) {
//   return function(b) {
//     return function(c) {
//       return function(d) {
//         return a + b + c + d;
//       };
//     };
//   };
// }
// console.log(curring(1)(2)(3)(4));

// function add(a) {
//     return function (b) {
//         if (b) return (a + b);
//         return a;
//     }
// }
// console.log(add(5)(4)(7)(9)());
// console.log(0==null)
/////////////////////////////////////////////////////////////////////////////
// function infinite(a) {
//     return function (b) {
//         if (b === undefined) {
//             return a;
//         }
//         return infinite(a + b);
//     }
// }
// console.log(infinite(4)(4)(5)(7)())

// let array = [10, 20, 30, 40, 50];

// let [a, b] = array;
// console.log(a)
// console.log(b)
// {
//     console.log(a)
//     const a = "aashif";
// }
///////////////////////////////////////////////////////
// function DeadZone() {
//     console.log(a);// Reference Error can not access before initiazation
//     const a = "ashif";
//     console.log(a);//aashif
// }
// DeadZone();
///////////////////////////////////////////////////////////////////////////////

// "use strict"
// {
//     function fun() {
//         console.log("Hello")
//     }
// }
// fun();
/////////////////////////////////////////////////////////
// function abc(a, b) {
//     "use strict";
//     let x = 100, y = 200;
//     return arguments[0] + arguments[1];
//     console.log(a + b);
// }
// console.log(abc(10, 20));

// var a = 10;
// let b = 20;
// console.log(window.a, window.b);
/////////////////////////////////////////////////////////////
// let array = [1, 3, 4, 5, 6];
// let result=array.map((item) => {
//    return item > 1;
// })
// console.log(result)
/////////////////////////////////////////////////////////////////
// let array = [1, 2, 3, 4, 5];
// let result = array.reduce((acc, value) => {
//     return acc + value;
// })
// console.log(result)
////////////////////////////////////////////////////////////////////////

// let array1 ="abcde"
// let array2 = "12345"
// let result = "";
// let MaxLength = Math.max(array1.length, array2.length)

// for (let i = 0; i < MaxLength; i++){
//     if (i < array1.length)
//     {
//         result+=array1[i]
//     }
//     if (i < array2.length)
//     {
//         result+=array2[i]
//     }
// }
// console.log(result)
////////////////////////////////////////////////////////////
// let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// let result = [];

// for (let i = 0; i < arr1.length; i++){
//     if (Array.isArray(arr1[i]))
//     {
//         result=result.concat(arr1[i])
//     }
//     else {
//         result=result.push(arr1[i])
//     }
// }
// console.log(result)
// let arr = [[1, 2], [3, 4], [5, 6]];
// let result = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//         return acc.concat(item)
//     }
//     else {
//         return acc.push(item);
//     }
// })
// console.log(result)
//////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result=arr.slice(1);
// console.log(result)
///////////////////////////////////////////////////////////////////////////
// let str = "hello aashif malik";
// let result = str.split(" ").map((item) => item.charAt(0).toUpperCase()+item.slice(1)) .join(" ")
// console.log(result)
// ////////////////////////////////////////////////clg
// console.log(isNaN("l"));//false
// console.log(+false);//0
// console.log(!"Aasif")//false
// console.log(NaN == undefined);
// console.log(NaN===undefined)
// let arr = [1, 2, 3, 4, 5];
// function fun(a, ...rest) {
//     console.log(a)
// console.log(...rest)
// }
//  fun(...arr)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const object = { name: "aashif" };
// console.log(delete object.name);
// console.log(object);

// const data = { name: "aashif" };
// console.log(delete data);

// const arr = [1, 2, 3, 4, 5];

// console.log(delete arr);
// console.log(delete arr[1]);

// let arr = [1, 2, 3, 4, 5];
// let [a, b, c] = arr;
// console.log(a,b,c)

// let a = false || null ||{} ;
// console.log(a);
///////////////////////////////////////////////
// function Reversed(num) {
//   let Result = 0;
//   while (num > 0) {
//     let Remainder = num % 10; //123%10
//     Result = Result * 10 + Remainder;
//     num = Math.floor(num / 10);
//   }
//   console.log(Result);
// }
// Reversed(12);
//////////////////////////

// console.log("a = ",a);
// console.log("b",b);
// var a = b = 10;
// let num = 10;
// console.log(num.toString());
// console.log(num.toString(12));

// var objA = { prop: 42 };
// var objB = objA;
// objB = {}
// console.log(objB);

// console.log("First");
// setTimeout(function () {
//     console.log("Middle")
// }, 1000)
// setTimeout(() => {
//     console.log("Second Middle")
// }, 1000);
// console.log("End")
// setTimeout(function () {
//     console.log("Aashif")
// },1000)

// function Delay() {
//     console.log("Execute after 2 second");
// }

// setInterval(Delay, 2000)
// clearInterval(Delay,40000)
// setTimeout(() => {
//     console.log("Excute after one minutes delay");
// }, 3000);

// const Interval = setInterval(() => {
//     console.log("Run every after 1 second");
// }, 1000);

// clearInterval(Interval,5000)
// setTimeout(() => {
//     clearInterval(Interval);
//     console.log("Clear Inteval after 6 second");
// }, 6000);

// function occ(str){
//  let count={};
//  for(let char of str){
//     count[char] = count[char] ? count[char] + 1 : 1;
//  }
//  return count;
// }
// const str="aabbcc";
// const result=occ(str);
// console.log(result)
// function occuring(a) {
//    return function (b) {
//       if (b === undefined) {
//          return a;
//       }
//       return occuring(a + b);
//    }
// }
// console.log(occuring(3)(3)(3)(3)(3)(3)());

// console.log(isNaN("aashif"));

// console.log(JSON.stringify(NaN) === JSON.stringify(NaN));
// console.log(NaN !== NaN);
// console.log(NaN==true)
// console.log(NaN==false)

// if(NaN){
//     console.log("I'm  there");
// } else {
//     console.log("I'm not there");
// }

// function fun(a) {
//     return function (b) {
//         if (b) {
//             return fun(a+b)
//         }
//         return a
//     }
// }
// console.log(fun(1)(2)(3)())

// function add(a,b) {
//     if (b) {
//         return a + b;
//     }
//     else {
//         return function (b) {
//             return a + b;

//         }
//     }
// }
// const rest = add(1, 2);
// const rest1 = add(1)(2)
// console.log(rest,rest1)

// function Bubble(array) {
//     for (let i = 0; i < array.length-1; i++){
//         for (let j = 0; j < array.length - i - 1; j++){
//             if(array[j]>array[j+1]){
//             let temp = array[j];
//             array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }

//         }
//     }
//     return array;
// }
// let array = [10, 8, 3, 6, 4, 7, 9, 2, 1,5]
// const result = Bubble(array);
// console.log("Sorted Array:",result);

// function FindChar(str, target) {
//     let count = 0;
//     for (let value of str) {
//         if (value === target) {
//             count++;
//         }
//     }
//     return count;
// }
// const result = FindChar("aabbaaccc", "c");
// console.log(result)
// **************************************************************************************
// let arr = [1, 2, 3, 4, 5];
// let arr1 = []
// arr.map((item) =>
//     arr1.unshift(item))
// console.log(arr1)

// let arr = [1, 2, 3, 4, 5];
// let arr1=[]
// for (let i = arr.length - 1; i >= 0; i--){
//    arr1.push(arr[i])
// }
// console.log(arr1)
// let arr = [1, 2, 3, 4, 5];
// function Reverse(arr) {
//   let arr1 = [];
//      arr1=[...arr].reverse()
//     console.log(arr1)
// }
// Reverse(arr);

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 7, 8, 9, 10]
// let result=arr.concat(arr1);
// console.log(result);

// let arr = [1, 2, 3, 4, 5]
// let arr1 = [6,7,8,9,10];
// for (let i = 0; i < arr1.length; i++){

//     arr.push(arr1[i]);
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// let arr1 = [6, 7, 8, 9, 10];
// arr.push(...arr1);
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// let arr1 = [6, 7, 8, 9, 10];

// let arr2=[...arr,...arr1]
// console.log(arr2)

// function Minimum(arr) {
//     let Min=arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < Min) {
//             Min = arr[i];
//        }
//     }
//     return Min;
// }
// let arr=[4,2,7,1,90,45]
// let result=Minimum(arr)
// console.log(result)

// let arr1 = [1,2,2,3, 4, 4,5, 6, 7, 6];
// let arr2=[]
// for (let i = 0; i < arr1.length; i++){

//     if (arr2.indexOf(arr1[i])==-1) {
//          arr2.push(arr1[i])
//     }
// }
// console.log(arr2)

// let arr1 = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6];
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i]) == false) {
//     arr2.push(arr1[i]);
//   }
// }
// console.log(arr2);

// let arr1 = [1, 2, 2, 3, 4, 4, 5, 6, 7, 6];
// let uniques=[...new Set(arr1)]

// console.log(uniques)

// ******************************* find currect date ***************
// function calculateAge(dobString) {
//   var date = new Date(); // Current date
//   var d2 = date.getDate();
//   var m2 = date.getMonth() + 1; // Months are 0-based
//   var y2 = date.getFullYear();

//   var dob = new Date(dobString); // Parsing the Date of Birth by argument
//   var d1 = dob.getDate();
//   var m1 = dob.getMonth() + 1;
//   var y1 = dob.getFullYear();

//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   // Adjust for leap year in February
//   if (y2 % 4 === 0 && (y2 % 100 !== 0 || y2 % 400 === 0)) {
//     month[1] = 29;
//   }

//   // Borrow days if needed
//   if (d1 > d2) {
//     d2 += month[m2 - 2 >= 0 ? m2 - 2 : 11]; // Handle January case
//     m2--;
//   }

//   // Borrow months if needed
//   if (m1 > m2) {
//     m2 += 12;
//     y2--;
//   }

//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

//   return { years: y, months: m, days: d };
// }

// // Example usage
// console.log(calculateAge("2001-09-15"));
