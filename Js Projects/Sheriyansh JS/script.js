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

// function retrive(arr, n = 1) {
//   if (n <= arr.lenght) {
//     for (let i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   } else {
//     console.log(n + "itne toh element he nahi");
//   }
// }

// retrive([1, 2, 2], 10);

// qustion 13 most frequnet array
// function a(arr){
//     let b = {};
//     arr.forEach((elem)=>{
//      if(b.hasOwnProperty(elem)) b[elem]++;
//      else b[elem] = 1;
//     })
//     console.log(b);
// }
// a([1,1,1,2,1,45,75]);

// qustion 14 shuffle karo

// function shufflekaro(arr) {
//   var totshuffleArea = arr.lengthl;
//   while (totshuffleArea > 0) {
//     totshuffleArea--;
//     let totshuffleArea = Math.floor(Math.random() * totshuffleArea);
//     let temp = arr[totshuffleArea];
//     arr[totshuffleArea] = temp;
//   }
//}

// {
//   var a = 10;
// }
// console.log(a);
// let value;

// value =25;
// console.log(value);

// const arr = [1,2,3,4,5,6];
// arr.splice(0,2,5,6);
// console.log(arr);
// // 56456

// const arr = [10,20,30,40,50];
// let newarray = arr.slice(0,2);
// console.log(newarray);
// console.log(arr);
// var chunk = function(arr, size) {
//     let result = [];
//     let index =0;
//     while(index < arr.length){
//         const chunk = arr.slice(index,index+size);
//         result.push(chunk);
//         index = index +  size;
//     }
//     return result;
// };
// console.log(chunk([10,20,30,40,50,60],2))

// pushing values in array
// var valuefilter = function (arr, fn) {
//   let newarr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       newarr.push(arr[i]);
//     }
//   }

//   return newarr;
// };
// console.log(valuefilter([10, 20, 30, 50], (val) => val > 0));
// function greet(){
//   console.log("Hellow")
// }
// let output =  greet();
// console.log(output);

// const sortby = function(arr,fn){
//  return arr.sort((a,b)=> fn(a)-fn(b));
// }
// let arr = [50,20,30,40,10];
// let fn = (x)=> x/2;
// console.log(sortby(arr,fn));

// string reverse
// const revesethestring = (strvalue) => {
//   let str = "";
//   for (let i = strvalue.length - 1; i >= 0; i--) {
//     str += strvalue[i];
//   }
//   return str;
// };
// console.log(revesethestring("mayur"));

// use reducer withou any metodh
// var reduce = function(nums, fn, init) {
//     let val = init;
//     for(let i =0; i<= nums.length; i++){
//         val = fn(val, nums[i]);
//     }
//     return val;
// };

// const nums = [1,2,3,4,5];
// const fn = (acc,curr)=> acc + curr;
// const init = 0;
// console.log(nums.fn, init);
// let myName = document.querySelector("h1");
// let h1 = document.createElement("h1");
// myName.textContent = "Mayur Best hai or rahega";
// h1.textContent = "hey mayur is the best coder";
// myName.append(h1);
// let li = document.querySelectorAll("li");
// for (let i = 0; i< li.length; i++){
//     console.log(li[i].textContent);
// }
// let li = document.querySelectorAll("li");
// li.forEach((elem) => (elem.style.fontSize = "48px"));
// console.log(li);

// let li = document.querySelectorAll("li");
// li.forEach((elm) =>
//   elm.addEventListener("click", function () {
//     elm.style.backgroundColor = "red";
//   })
// );

// let inp = document.querySelector("input");
// inp.addEventListener("input", function (elem) {
//   if (elem.data !== null) {
//     console.log(elem.data);
//   }
// });
// let select = document.querySelector("select");
// let device = document.querySelector("#device");

// select.addEventListener("change", function (elm) {
//   device.textContent = `${elm.target.value} My Fav Mtb Selected`;
// });
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function (elem) {
//   h1.textContent = elem.key;
// });
// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function (deft) {
//   abcd.style.top = deft.clientY + "px";
//   abcd.style.left = deft.clientX + "px";
// });
// let input = document.querySelector("input");
// let span = document.querySelector("span");

// input.addEventListener("input", function () {

//   let left = 20 - input.value.length;
//   span.textContent = left;

//   if (left < 0) {
//     span.style.color = "red";
//   } else {
//      span.style.color = "black"
//   }
// });
// let nm = document.querySelector("#name");
// let em = document.querySelector("#email");
// let pa = document.querySelector("#password");
// let fm = document.querySelector("form");
// fm.addEventListener("submit", function (deft) {
//   deft.preventDefault();
//   if (nm.value.length <= 2) {
//     document.querySelector("#hide").style.display = "initial";
//   } else {
//     document.querySelector("#hide").style.display = "none";
//   }
// });

// function timoutse(){
// setInterval(()=>{
//  console.log("Mayur iS The Best Coder");
// },2000)
// }
// timoutse();

localStorage.setItem("name","Mayur is The Best Coder");