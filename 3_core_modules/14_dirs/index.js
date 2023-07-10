const fs = require('fs')


if(!fs.existsSync('./pasta')){
    console.log('não existe')
    fs.mkdirSync('pasta')
}else{
    console.log('existe')
}