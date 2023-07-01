const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
let nome = args['nome']
console.log(nome)