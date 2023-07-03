const fs  = require('fs')

console.log("inicio")
fs.writeFileSync("arquivo.txt",'oi\n')
console.log("fim")