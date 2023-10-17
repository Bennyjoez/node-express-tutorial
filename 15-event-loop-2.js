// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0)
console.log("third");

// completed and exited operating system process

// below the last console statement runs first then the interval calls

setInterval(() => {
  console.log("hello world!");
}, 2000)
console.log("I will run first");