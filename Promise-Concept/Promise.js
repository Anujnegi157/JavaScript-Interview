const { log } = require('console');
const fs = require('fs');

let readPromise = fs.promises.readFile('./RuleOfPromise.txt');

console.log('state of promise',readPromise);

setTimeout(() => {
  log('State of promise after 2 sec',readPromise);
}, 2000);