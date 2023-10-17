// event loop in action. An operation that takes time will be transfered to webapis and when it's time to execute, it is added to a queue. when the stack is empty, items on the queue are addded to the stack and executed in FIFO

const { readFile } = require('fs');

console.log("started a first task");
// check file path!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if(err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed first task");
})
console.log("starting next task");