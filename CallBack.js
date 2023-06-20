const { log } = require('console');
const fs = require('fs');

// callback help us to do Async Task

fs.readFile('./demo.txt',function callback(err,data){
  log(data+"");
})
