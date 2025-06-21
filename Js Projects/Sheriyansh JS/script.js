// console.log("Mayur");

// let currentyear = new Date();
// console.log(currentyear.getFullYear());

// // concat the name
// let NameA = "Mayur";
// let NameB = "Nishad";
// console.log(NameA.concat(NameB));

// console.error("Enter A Valid Code");

// var a = true;
// console.log(typeof a);

// let age = prompt("Enter The Age");

// if (age > 18) {
//   console.log("You Are Eligible To Give A Vote");
// } else {
//   console.log("You Are Not Eligible To Give A Vote");
// }

// variabls qustions
// let a = 12;
// console.log(a);

// const pivalues = Math.PI;
// console.log(pivalues);

// let c = 20;
// c = 40;

// console.log(c);

// var d = "25";
// console.log(typeof(d));

// let a = 45;
// console.log(a);

// let b = "gabu samijame";
// console.log(b);

// let c = true;
// console.log(c);

// const arr =  [10,20,30,40,50];
// console.log(arr);

// const me updation allowed hai lekin reasign not allowed

// for loop qustion

// for(let i = 0; i<=50; i++){
//     console.log(i);
// }

// sum of 1 to 10 numbers

// for (let i = 1; i <= 10; i++) {
//   let sum = i + i
//   console.log(sum);
// }

// let a = 1;
// let sum = 0;
// while (a <= 10) {
//    sum = a + sum
//   a++;
// }

// console.log(sum);

// let a ="Javascript";

// for( let Strvalues of a){
//     console.log(Strvalues);
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// let i = 5;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// let fect = 1;

// for (let i = 5; i > 0; i--) {
//   fect = fect * i;
// }
// console.log(fect);

// var hold = 0;
// for(let i =1; i<4; i++){
//     let str = ""
//     for(let j = 1; j<4; j++){
//        str  += `${hold} `
//        hold++;
//     }
//     console.log(str);
// }

//  let arr = [1,2,3,4];
//  for(let i = arr.length-1; i>=0; i--){
//     console.log(arr[i]);
//  }
//  console.log(arr);
// let num = 1;
// while (num < 101) {
//   if (num % 5 === 0) {
//     console.log(num);
//   }
//   num++;
// }

// find the key in Object
// let obj = {
//     "First_Name" : "Mayur",
//     "Last_Name" : "Nishad",
//     "Age" : 25
// }

// for(let key in obj){
//     console.log(key);

// }

// let a = ["idatainjump","pokemon","shinchane","ben10","powerRnager"];
// a.map((items)=>(
//     console.log(items)
// ))

// let arr = [10, 20, 30, 40];

// arr.pop();
// console.log(arr);

// arr.unshift(9);
// arr.unshift(8);
// console.log(arr);

// let newarray = arr.slice(1,3);
// console.log(newarray);

// console.log(arr.indexOf(20));

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.includes(10));

// let a = [1,2,3];
// let b = [3,4,5];

// console.log(a.concat(b));

// let c = [5,4,3,1,2];

// c.sort();
// console.log(c);

// let a = [2,1,3,4,5];
// console.log(a);

// let c = [...a];
// console.log(c);

// for(let i = 0; i<a.length-1; i++){
//     if(a[i]> a[i+1]){
//         let temp = a[i];
//         a[i] = a[i+1];
//         a[i+1] = temp
//     }
// }

// console.log(a);

// functions

// function frindoddevenNumber(num) {
//   if (num % 2 === 0) {
//     console.log("Number is even");
//   } else {
//     console.log("Number is Odd");
//   }
// }
// frindoddevenNumber(prompt("Enter The Number"));

// function area(r){
//     return Math.PI * r * r;
// }
// console.log(area(12));

// function sumOfarr(arr){
//     let sum =0;
//     arr.forEach((v)=>{
//       sum = sum + v
//     })
//     return sum;
// }

// console.log(sumOfarr([10,20,30,40,50]));

// function checker(string,char){
//     return string.startsWith(char)
// }
// console.log(checker("Mayur","M"));

// function findmaxvalue(a,b){
//  let c =   Math.max(a,b)
//     return c;
// }
// console.log(findmaxvalue(10,50));

// function findfact(num){
//   let fact = 1;
//   for(let i =1; i<num; i++){
//     fact = fact * i
//   }
//   return fact
// }

// console.log(findfact(10));

// function retunstr(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// }

// console.log(retunstr("Mayur"));

// let arr = [];
// function number(arr){

//     for(let i=0; i<arr.length; i++){
//         Math.max(arr)
//     }
//     return arr
// }
// console.log(number([10,20,30,40]));

// function abcd(arr) {
//   var max = 0;
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }
//   return arr[max];
// }

// console.log(abcd[(10, 20, 50, 70, 40)]);

// function abcd() {
//   console.log("Hellow World");
// }
// abcd()

// function validatePalindrome(str) {
//   const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
//     if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
//       return "String is not a palindrome";
//     }
//   }
//   return "String is a palindrome";
// }

// console.log(validatePalindrome("pap"));
// let count = 0;

// function makeCounter() {
//   function incremnet() {
//     count++;
//     console.log(count);
//   }
//   function decrement() {
//     count--;
//   }
//   return {
//     incremnet,
//     decrement,
//   };
// }

// const counter = makeCounter();
// counter.incremnet();
// counter.decrement();

// Your implementation

// Your implementation
// const arr = [10, 20, 30, 40, 50];
// for (let i = arr.length - 1; i > 0; i--) {
//   console.log(i);
// }

// question 1 solve
// var str = "Mayur is the best logic building Programmer";
// var stringReverse = str.split(" ").map((words) => {
//   return words.split("").reverse().join(" ");
// });
// console.log(stringReverse.join(" "));

// qustion 2 solve
// function checkArray(elem){
//     return(Array.isArray(elem));
// }
// console.log(checkArray([]));
// console.log(checkArray({}));

// Qustion 3 solve
// duplicat Array

// let arr = [10, 20, 30, 40, 50];

// console.log(arr.concat(arr));

// qustion 4 string reverse
// function reverseNumber(num){
//     return num.toString().split().reverse().join();
// }
// console.log(reverseNumber(18));

// qustion 5

// function reverseNumber(num) {
//   let rev = 0;
//   while (num > 0) {
//     var rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }

// console.log(reverseNumber(123456789));

// qustion 6 palidrome checker

// function checkpelidrome(str){
//   let reversed =   str.split("").reverse().join("");
//   if(reversed === str){
//     return true;
//   }
//   return false;
// }
// console.log(checkpelidrome("markram"));

// qustion- 7 write alphabetic order
// function stringAlphbetic(str){
//      return str.split("").sort();
// }
// console.log(stringAlphbetic("mayur"));

// qustion 8 captial first word
// function CaptilizeWord(str) {
//   const capswords = str
//     .split(" ")
//     .map((words) => words.charAt(0).toUpperCase() + words.substring(1));
//  return capswords.join(" ");
// }
// console.log(CaptilizeWord("mayur is the best coder"));
// function occ(str) {
//   var occurence = {};
//   str.split("").forEach((ele) => {
//     if (occurence.hasOwnProperty(ele) === false) {
//       occurence[ele] = 1;
//     } else {
//       occurence[ele]++;
//     }
//   })
//    return occurence;
// }
// console.log(occ("aaaa"));

// qustion 9 sum off all array elements
// const arr = [10,20,30,40];
// var sum = 0;

// arr.forEach((elem)=>(
//     sum = sum + elem
// ))
// console.log(sum);

// qustion 10 number off array and string
// const arr = ["Mayur", 182, "Aakash", 45];
// let sum = 0;
// arr.forEach((elm) => {
//   if (typeof elm === "number") {
//     sum = sum + elm;
//   }
//   return sum;
// });

// console.log(sum);

// qustion 11 clone the array
// function cloneArr(arr){
//     return [...arr];
// }
// console.log(cloneArr([10,20,30,40]));

// qustion 12 typeteller

function retrive(arr, n = 1) {
  if (n <= arr.lenght) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(n + "itne toh element he nahi");
  }
}

retrive([10, 20, 20], 5);
