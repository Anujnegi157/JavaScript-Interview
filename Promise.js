// callback limitation overcome promises 1)callback hell (pyramid of dom) 2) inversion of control 
//  promise .then method help us to overcome inversion of control
//  promise we write vertically first problem



const { log } = require('console');
const fs = require('fs');

//  promise is a object that contains -> ProtoType->Promise, PromiseState->fullfilled,rejected, pending, PromiseResult->response
let PromiseRead = fs.promises.readFile('./dem.txt');
// log(PromiseRead);
PromiseRead.then(function(data){
  log(data+"");
}).catch(function(err){
  log("error");
  log(err);
})