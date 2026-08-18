const { log } = require('console')
const OS = require('os')

// info about current user

const user = OS.version()
// console.log(user);

// methos returns the system uptime in seconds
console.log(`The system Uptime is ${OS.uptime()} seconds`)

const currentOS = {
    name: OS.type(),
    release: OS.release(),
    totalMem: OS.totalmem(),
    freeMem: OS.freemem(),
    version: OS.version()
}

console.log(currentOS);
