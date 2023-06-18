// we have execution context in which we have global in case of node but in brwoser we have window and this in node is equal to {} but in brower it is equal to window by default  provided  by javascript engine
// console.log(global);
// console.log(this);

//  jo code kisi fxn ke under nhi h wo h global area 
//  and we have code , global , this in global execution context
//  in code -> the variable we have declared will memory allocated here (undefined) -> hoisting
// console.log("a is",a);
// var a;
// console.log("a is",a);
// a=10;
// console.log("a is",a);

//  function statement -> heap mai bnke stack mai reference leke memory defined ho jaygei 
// fn();
// function fn(){
//   console.log("I can be called before my declaration");
// }
// fn();


//  question -1 Interview question
// real(); // "You both are wastd" because of hositing
// function real(){
//   console.log("I am real. Always run one");
// }
// function real(){
//   console.log("No I am real One");
// }
// function real(){
//   console.log("You both are wasted");
// }
// real(); "You both are wastd" because of hositing
//  khi bhi real ko call kro "you both are wasted " hi hoga print due to hositing 

// question -2 Interview question

// console.log(varname);-> undefined
// var varname;
// console.log(varname);-> undefined
// varname="Anuj"
// console.log(varname);->anuj
// fn();-> i am fn
// function fn() {
//     console.log("I am fn");
// }
// fn();-> i am fn
// // fnContainer();  -> error because it is a function expression not a function declearation
// var fnContainer = function (){
//   console.log("I am an expression");
// }
// fnContainer();
// -> In hoisting variable and function declaration are occur in memory.