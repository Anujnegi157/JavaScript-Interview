
const { log } = require('console');
const fs = require('fs');
let arr = ['../f1.txt','../f2.txt','../f3.txt','../f4.txt'];

let initialPromise = fs.promises.readFile(arr[0]);
for(let i=1;i<arr.length;i++){
  initialPromise= initialPromise.then(function(data){
    log("data",data+'');

    return fs.promises.readFile(arr[i]);
  })

}
initialPromise.then(function(data){
  log("data",data+'');
})
