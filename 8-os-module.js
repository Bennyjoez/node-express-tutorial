// os = operating system module
const os = require('os');
// os has a classification of methods and properties we can access

// current user info
const user = os.userInfo();
console.log(user)

// method return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds.`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
console.log(currentOs);