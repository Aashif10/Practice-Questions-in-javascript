// let object = [
//   {
//     name: "jhone",
//     salary: 50000,
//     department: "IT"
//   },
//   {
//     name: "jhone",
//     salary: 60000,
//     department: "HR"
//   },
//   {
//     name: "jhone",
//     salary: 55000,
//     department: "IT"
//   },
//   {
//     name: "jhone",
//     salary: 75000,
//     department: "HR"
//   },
//   {
//     name: "jhone",
//     salary: 65000,
//     department: "IT"
//   },
//   {
//     name: "jhone",
//     salary: 80000,
//     department: "HR"
//   },
//   {
//     name: "jhone",
//     salary: 70000,
//     department: "IT"
//   }
// ];

// let iit = object.filter(val => {
//   return val.department == "IT";
// });
// console.log(iit);
// let hrr = object.filter(val => {
//   return val.department == "HR";
// });
// console.log(hrr);

// let itavg = iit.reduce((acc, val) => {
//   return (acc = acc + val.salary);
// }, 0);

// console.log(itavg);

// let hravg = hrr.reduce((acc, val) => {
//   return (acc = acc + val.salary);
// }, 0);

// console.log(hravg);

// let ha = hravg / hrr.length;
// let ia = hravg / iit.length;

// console.log(ha);
// console.log(ia);

// let op = [
//   { department: "HR", average: { ha } },
//   { department: "IT", average: { ia } }
// ];

// console.log(op)
// let Output = op.filter(val => {
//   if (val.average.ha > 65000) {
//     console.log(val);
//     }
//       if (val.average.ia > 65000) {
//         console.log(val);
//       }
// });

//! Q 2. Find Duplicate Number...

// let array = [1, 2, 3, 4, 5, 1, 2, 7, 6, 8, 2, 9, 4, 10];

// let output = new Set(array);
// let output = Array.from(new Set(array));
// let output=[...new Set(array)];
// console.log(output)
// console.log(...output);

// ! 1 Question
// function greet() {
//     console.log("Hello World!");
// }
// function hello() {
//     greet();
// }
// hello();

// ! 2 Question

// let array = [1, 2, 3, 4, 5];

// let newArray=array.map((value) => {
//   return  value * 2;
// })
// console.log(newArray)

// ! 3 Question
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArray = array.filter((value) => {
//     return value % 2 === 0;
// })
// console.log(newArray)

// ! 4 Question
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArray = array.reduce((acc, value) => {
//     return acc + value;

// }, 0)
// console.log("Sum of all number:",newArray)

//   ! 5 Question
// let array = [1, 2, 3, 4, 5];

// let Double = array.map(value => {
//     return value * 2;
// });
// console.log("Double:", Double)

// let Sum = Double.reduce((acc, value) => {
//     return acc + value;
// })
// console.log("Sum of All Number:",Sum)
// ! 6 Questions

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = array.reduce((max, num) => (max > num ? max : num), array[0]);
// console.log(maximum);

// ! 7 Questions
// const arrays = [[1, 2], [3, 4], [5, 6]];
// let newArray = arrays.reduce((acc,value)=>acc.concat(value))
// let newArray = arrays.flat();
// console.log(newArray)

// ! 8 Questions
// let array = [1, 2, 3, 4, 5];
// let total = array.reduce((acc, value) => {
//     return acc + value;

// })
// let average = total / array.length;
// console.log("Average:",average)
// ! 9 Question

// const numbers = [1, 2, 3, 4, 3, 2, 1];
// const uniqueNumbers = numbers.reduce((acc, num) => {
//   if (!acc.includes(num)) {
//     acc.push(num);
//   }
//   return acc;
// }, []);
// console.log(uniqueNumbers);
// ! 10 Question
// const numbers = [1, 2, 3, 4, 5, 6];
// let Even = numbers.filter((value) => value % 2 === 0);
// let odd = numbers.filter((value) => value % 2 == 1);
// console.log(Even)
// console.log(odd)

// ! 11 Question
// const cart = [
//   { item: "Apple", price: 2, quantity: 3 },
//   { item: "Banana", price: 1, quantity: 5 },
//   { item: "Orange", price: 3, quantity: 2 }
// ];
// let Total = cart.map((value) =>value.price * value.quantity);
// console.log(Total)

// let Sum = Total.reduce((acc, value) => {
//     return acc + value;

// })
// console.log(Sum)
// ! 12 Question Reverse Array
// let array = [1, 2, 3, 4, 5];
// let newArray=[];

// for (let i = array.length-1; i >= 0; i--){
//     newArray.push(array[i]);
// }
// console.log(newArray)

// ! 13  Question Sum og Digits

// let sum = 0;
// let number = 12345;
// while (number > 0) {
//     let remain = number % 10;
//     sum =parseInt( sum + remain);
//     number = number/ 10;
// }
// console.log("Sum of digits:",sum);

//! 14 Question High Order Function

// let sum = (a, b) => a + b;
// let multiple = (a, b) => a * b;

// function calculator(task, c, d) {
//     return task(c, d);
// }
// let result =calculator (sum, 10, 20);
// console.log(result);
//! 15 Lexical Scope
// let a = 100;
// function outer() {
//     a++;
//     console.log(a);
// }
// outer();
//! 16 Closure
// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a)
//     }
//     return inner();
// }
// outer();
// res();
//! 17 splice methods in Array
//   It is used perform deletion ,updatation and insertion

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// array.splice(0, 0, 11)
// console.log(array);

// ! 18 slice method in array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArray = array.slice(0, 4)
// console.log(newArray)
// ! 19 map array method
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let string = "A";
// let code = string.map((char) => char.charCodeAt(0))
// console.log(code)
// !
// let str = "Aashif"
// let newStr = Array.from(str).map((char) => char.toUpperCase(0))
// console.log(newStr)
// let result = newStr.join('');
// console.log(result)

// ! 20 Unique Value
// let array = [1, 2, 1]
// let unique=array.filter((value, index, array) => array.indexOf(value) == (index))
// console.log(unique)
// !21 word length greater than 3
// let str = ["javascript", "is", 'great', 'language'];
// let words = str.filter((word) => word.length < 4)
// console.log(words)
// !
// let str = [true, false, "Great", 120]
// let boolean = str.filter((vlaue) => typeof(vlaue) === 'boolean')
// console.log(boolean)
// !
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArray = array.filter((value) => value <= 5);
// console.log(newArray)

// !

// let array = [1, 2, 3, 4, 5]
// let sum = array.reduce((acc, value) => acc * value)
// console.log(sum)
// !
// let str = ["Aashif", "khan"];
// let reslut = str.join(' ');
// console.log(reslut)
// !
// const orders = [
//   { item: "Book", price: 15 },
//   { item: "Pen", price: 5 },
//   { item: "Notebook", price: 10 }
// ];
// let result = orders.reduce((acc, value) => {
//    return acc + value.price;
// },0)
// console.log(result)
// let array = [1, 2, [3, 4], [5, 6]];
// let newArray = array.flat();
// console.log(newArray)

// for (let i = newArray.length; i >=0; i--){
// console.log(newArray[i])
// }
// let reverse = newArray.reverse();
// console.log(reverse)

// ! Join
// let str = "Hello World "
// let arr = str.split("");
// console.log(arr)
// let newArray = arr.map((value) => value.toUpperCase())
// console.log(newArray)
// let result = newArray.join("");
// console.log(result)
// ! Check Palindrome Numbeer
// function Palindrome(number) {
//     let temporay = number;

//     let reverse = 0;

//     while (number > 0) {
//         let digit = number % 10;
//         reverse = (reverse * 10) + digit;
//         number = Math.floor(number / 10);
//     }
//     if (reverse === temporay) {
//         console.log("Number is Palindrome:", reverse);
//     } else {
//         console.log("Number is not Palindrome:", reverse);
//     }
// }
// Palindrome(1321)

//! Find Missing Number in array

// let SumOfNatural = 0;
// let arraySum = 0;
// function findMissing(arr) {
//     let n = arr.length;
//      SumOfNatural = (n * (n + 1)) / 2;
//     for (let i = 0; i < n; i++){
//         arraySum += arr[i];
//     }
//     return arraySum-SumOfNatural;
// }
// let array = [1,3,4,5];
// let result = findMissing(array);
// console.log("Missing Number is:", result)

// function Greet(name, callback) {
//     console.log("Name:", name)
//     callback();
// }

// function SayHi() {
//     console.log("Hi Javascript")
// }

// Greet("Aashif",SayHi)

// let arr = new Array()
// arr = [20, 30, 40, 50];
// console.log(arr)

// let fruits = ["Apple", "Banana", "pineApple"]
// fruits.forEach((item,index) => {
//     console.log(`Index ${index}: ${item}`)
// })

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 }
// ];

// users.forEach((item) => {
//     if (item.name === "Bob") {

//         item.age += 1;
//     }
// })
// console.log(users)

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 31 },
//   { name: "Charlie", age: 28 }
// ];

// users.forEach((item) => {
//     if (item.age >= 25 &&item.age<30 ) {
//         item.name="Aashif"
//     }
// })
// console.log(users)

// let arr = [10, 20, 30, 40, 50];

// for (let item of arr) {
//   if (item % 6 === 0) {
//     console.log(item);
//   }
// }

// let name = "aashif,upkar,amir,sheetal";
// let array = name.split(",")
// let output = array.map((item) => ({ name: item }));
// console.log(output)

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 31 },
//   { name: "Charlie", age: 28 }
// ];

// users.map((item) => {
//     if (item.name === "Bob") {
//         item.age+=2
//     }
// })
// console.log(users)

// let object = { name: "aashif", age: 33 }
// let newobj = object;
// newobj.age = 23;
// console.log(object) //23
// console.log(newobj)  //23

// let object = { name: "aashif", age: 33 }
// let newObj = {};

// for (let element in object) {
//     newObj[element] = object[element]
// }

// newObj.age = 44;
// newObj.name="abc"
// console.log(object)
// console.log(newObj)

// let arr = new Array(5);//size
// for (let i = 0; i < arr.length; i++){
//     if (i == 1 || i==3) {
//         arr[i]=5
//     }
// }
// console.log(arr)

// const fetch = require('node-fetch'); // Install via: npm install node-fetch

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log("Fetched Data:", data);
//     } catch (err) {
//         console.error("Error fetching data:", err);
//     }
// }

// fetchData();

// console.log([]+[])

// 