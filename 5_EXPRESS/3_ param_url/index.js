const express = require("express")
const app = express()

const path = require("path")

const PORT = 3000
let basePath = path.join(__dirname,"templates") 



app.get("/users/:id",(req,res)=>{
    const id = req.params.id
    res.send("estamos buscando pelo usuário: "+id)
})

app.get("/",(req,res)=>{
    res.sendFile(basePath+"/index.html")
})
app.listen(PORT,(err)=>{
    console.log("runring...")
})
console.log(basePath)