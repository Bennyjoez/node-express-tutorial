// STREAMS

// types of streams
// Writeable
// READABLE
// create a readStream
const { createReadStream } = require('fs');
const stream = createReadStream("./content/big-file.txt")

// events listening
stream.on('data', (result) => {
  console.log(result);
})

// Notes for readable
  // - by default the chunks will be 64kb
  // - last buffer will be the remainder
  // - highWaterMArk - control size
  // - const stream = createReadStream('./content/big.txt', { highWaterMark: 90000} ) //this sets chunks of 90kbs
  // - const stream = createReadStream('./content/big.txt', { encoding: 'utf8' } ) //sets the encoding to print the actual text

// Duplex
// Transform