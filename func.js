// console.log("hello world");

// function sayHello(param){
//   console.log("hello",param);
// }
// sayHello();
// let rval = sayHello();
// console.log(rval);

// function are treated as variable in javascript
// fucntion expression

// let fxnVariable = function fn(){
//   console.log("I am function Variale");
// }
// fxnVariable();

// let fxnVarAnonyms = function (){
//   console.log("I am Anonyms function Variale");
// }
// fxnVarAnonyms();


// IIFE - Immediaely invoked function expression

// (function fn(){
//   console.log("i am iife fxn");
// })();
//  Arrow function
//   ab=(nums) => {
//   return 9*nums;
//  }
//  console.log(ab(5));

// 



//  function are treated as a variable
//  we can pass param in fxn
//  variable can be pass a parameter we can pass fxn also as a parameter
// usescase->   callbacks , higher order fxn
// function can be return as function -> closure
// function sayHello(param){
//   console.log("hello",param);
// }
// function smaller(){
//   console.log("I am Smaller");
// }
// sayHello(smaller)  it will not print "I am Smaller " because we have not invoked the fxn
// function sayHello(param){
//   console.log("hello",param);
//   param();
// }
// function smaller(){
//   console.log("I am Smaller");
// }
// sayHello(smaller)   it will   print "I am Smaller " because we have not invoked the fxn

// function outer(){
//   console.log("I am outer returning inner");
//    return function inner(){
//     console.log("I am inner");
//    }
// }
// let rval = outer();
// rval();