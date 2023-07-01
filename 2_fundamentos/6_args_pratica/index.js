const soma = require('./soma').soma
const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
let a = parseInt(args['a'])
let b = parseInt(args['b'])

console.log(soma(a,b))