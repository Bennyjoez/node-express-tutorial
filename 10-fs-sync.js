// fs = file system module

// synchronous

const {readFileSync, writeFileSync} = require('fs');

console.log("start");

const first = readFileSync('./content/first.txt', 'utf8');
console.log(first);
const second = readFileSync('./content/second.txt', 'utf-8')
console.log(second);

// if the file is not there, it creates it and writes
// if the file is there, it will replace the contents
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`)
console.log("done with this task");

// to append to the located existing file
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' })
console.log("starting the new task");