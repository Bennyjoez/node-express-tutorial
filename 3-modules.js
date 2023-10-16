// CommonJS, every file is a module(by default)
// modules - Encapsulated code (only share minimum)
require("./7-mind-grenade")

const names = require('./4-names')
const greeting = require('./5-utils')
const data = require("./6-alternative_flavor")
console.log(data)
console.log(names);

greeting("Benson")
greeting(names.john)
greeting(names.susan)