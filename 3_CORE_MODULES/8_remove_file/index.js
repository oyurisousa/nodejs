const fs = require("fs")


fs.unlink("teste.txt",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("remove file with sucess!")
})
s