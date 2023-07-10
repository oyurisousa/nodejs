const { subscribe } = require('diagnostics_channel')
const path = require('path')
const customPath = '/relatorios/yuri/relatorio.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))