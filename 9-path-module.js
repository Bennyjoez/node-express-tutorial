// path module
const path = require('path');

console.log(path.sep) // => '/' : returns the path separator

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(filePath);

// base name
const base = path.basename(filePath)
console.log(base);

// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);