const fs = require('fs')

fs.rename('arquivo.txt','texto.txt',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("arquivo renomeado!")
})