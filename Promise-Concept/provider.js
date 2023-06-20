const  fs = require('fs');
// const axios = require('axios');
const { log } = require('console');

let pPromise = fs.promises.readFile('./RuleOfPromise.txt');
pPromise.then(function(data){
  log(data,'');
})
let aPromise = fetch('https://jsonplaceholder.typicode.com/users');
aPromise.then(function(Response){
  return Response.json();
}).then(function(json){
  log(json);
})