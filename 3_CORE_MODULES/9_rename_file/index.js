const fs = require("fs")

fs.rename("teste.txt","newTeste.txt",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("rename file with sucess!")
})
