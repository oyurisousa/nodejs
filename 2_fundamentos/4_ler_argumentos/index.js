

const args = process.argv.slice(2)

var nome = args[0].split('=')[1]
var idade = args[1].split('=')[1]
console.log(nome,idade)