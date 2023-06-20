const { rejects } = require("assert");
const { log } = require("console");
const { resolve } = require("path");
const fs = require('fs');
// We will create our own promise here .
// let PromiseRead = fs.promises.readFile('./dem.txt');
// // log(PromiseRead);
// PromiseRead.then(function(data){
//   log(data+"");
// }).catch(function(err){
//   log("error");
//   log(err);
// })
//  we have to create a promise like this.
function readPromise(dataPath){
    return new Promise(function(resolve,rejects){
       let data = fs.readFile(dataPath,function cb(err,data){
         
          if(err){
            rejects(err);
          }else{
            resolve(data); 
          }
       });
    })
    }

    let ourPromise = readPromise('./demo.txt');
    // function call hai -> then is synchronus then abhi chl jata h bss callback fxn async hota h jo usmai pass hota hai
    ourPromise.then(function(data){
      log(data+"");
    })
    ourPromise.catch(function(err){
      log(err);
    })
