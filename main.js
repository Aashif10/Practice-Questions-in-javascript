
// for (let i = 5; i <= 1; i++){
//     let row = '';
//     for (let j = i; j >=1; j--){
//         row += '*';
//     }
//     console.log(row);
// }
// let array = [1, 2, 3, 4, 5,4,5,3];
// console.log(array)
// for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++)
//     {
//         if (array[i]== array[j]) {
            
//             console.log("Duplicate Number:",array[j]);
//         }
        
//     }
// }

// let array = [10,20,30,40,50];
// let max =0;
// for (let i = 0; i < array.length; i++){
    //     if (array[i] > max) {
        //         max = array[i];
        //     }
        // }
        // console.log("Largest Number:", max)
        
// let array = [10, 20, 30, 40, 45,55];
// let max = 0;
// let secondMax = 0;
// for (let i = 0; i < array.length; i++){
//         if (array[i] > max) {
//             secondMax = max;
//             max = array[i];
//         }
//         else if (array[i] > secondMax && array[i] !== max) {
//             secondMax= array[i];
        
//     }
// }
// console.log("Maximum:", max);
// console.log("SecondMax:", secondMax);


// let a = 40;
// let b = 30;
// console.log("Old Value A:", a ," value B:",b);
// a = a - b;
// b = a + b;
// a = b - a;
// console.log("New Value A:", a ," value B:",b);

// function Test() {
//     const a = b = c = "🌹";
// }
// Test();
// console.log(typeof a);
// console.log(typeof b);
// // console.log(typeof c)
// let string = "hello world"
// let result = string.toUpperCase();
//     console.log(result)

// let arr = [10, 20, 30, 40, 50];
// arr.pop();
// console.log(arr)//10,20,30,40

// const array = ["Mango", "Apple", "cherry", "Banana"];
// const result = array.pop();
// console.log(result);//Banana

// function isprime(number) {
//     if (number <= 1) {
//         console.log("Number is not first prime")
//         return;
//     }
    
//     for (let i = 0; i < Math.floor(number) / 2; i++){
//         if (number % 2 === 0) {
//             console.log("number is not Prime");
//             return;
//         }
//     }
//     console.log("Number is prime");
// }
// isprime(14)

// (
//     function (n) {
//         n % 2 === 0 ? console.log("Even"):console.log("Odd")
//     })
//  (32)

// let add = (a, b) => a + b;

// function calculator(task, c, d) {
//     return task( c, d);
// }
// let result = calculator(add, 40, 50);
//     console.log(result)

// let a = 10;
// function test() {
//     a++;
//     console.log(a)
// }
// test();

// function outer() {
//     let a = 20;
//     console.log(a)
//     function inner() {
//         a++;
//         console.log(a)
//     }
//     return inner
// }
// let rs=outer();

// // rs();
// let arr = [10, 20, 30, 40, 50];
// let new_arr=arr.splice(1, 3);
// console.log(new_arr);


// let arr = [10, 21, 30, 40, 50];
// arr.forEach((item) => {
    //         console.log(item)
    //     })
    
// let arr = [10, 21, 30, 40, 50];
// let Array=arr.map((value) => value * 5)
//     console.log(Array)

// let arr = [10, 21, 30, 40, 50];
// let array = arr.filter((item) => {
//     if (item > 30)
//         return true;
    
// })

// console.log(array)



// let arr = [10, 21, 30, 40, 50];
// let array = arr.reduce((acc, value)=> {
//     acc = acc + value;
//     return  acc;
// }, 0)
// console.log("sum of array",array)
// let object = {
//     name: "aashif",
//     age: 33

// }
// object.city = "noida"
// delete object.age;
// console.log(object)

// let object = {
//     name: "aashif",
//     age: 33
// }
// let obj = object;
// obj.age = 44;
// console.log(obj)
// let object1 = {
//   name: "aashif",
//   age: 33
// };
// let object2={ };

// for (let value in object1) {
//     object2[value] = object1[value];
// }
// object2.age = 55;
// console.log(object2)
// console.log(object1)

// let object = {
//   name: "aashif",
//   age: 33
// };
// function call(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(this.name)
//     console.log(this.age)
    
// }
// let result = call.bind(object, 10, 20, 30, 40)
// result()

// let object = {
//   name: "aashif",
//   age: 33
// };
// let array=[10,20,30,40,50]
// function details([a,b,c]) {
    //     console.log(a)
    //     console.log(b)
    // }
    // details(array)
    // function fun(a, b,...rest) {
    //     console.log(a)
    //     console.log(b)
    // }
// fun(10, 20, 30, 40, 50);
// let array = [10, 20, 30, 40, 50];
// function details(a,b,c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// details(...array)

// let array = [QA