const path = require('path')

//path absolute
//console.log(path.resolve('teste.txt'))

//formar path

var midFolder = 'relatorios'
var filename = 'yuri.txt'

var finalPath = path.join('/','arquivos',midFolder,filename)
console.log(finalPath)