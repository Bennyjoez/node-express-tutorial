// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(commonjs)
// module - info about current module
// process - info about env where the program is being executed

console.log(__filename)

// we have access to settimeout and setinterval
// setInterval(() => {
//   console.log("Hello world!")
// }, 1000)

setTimeout(() => {
  console.log("This")
}, 1000)