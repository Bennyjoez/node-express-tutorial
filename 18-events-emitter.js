// events
// event-driven programming
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`user data received name: ${name}, id: ${id}`);
})

customEmitter.on('response', () => {
  console.log("Some other event");
})

// first listen for the event then emit it
customEmitter.emit('response', "Benson", 34)

