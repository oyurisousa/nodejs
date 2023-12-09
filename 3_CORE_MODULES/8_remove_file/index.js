const fs = require("fs")
const path = require("path")


fs.unlink("teste.txt",(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("remove file with sucess!")
})
