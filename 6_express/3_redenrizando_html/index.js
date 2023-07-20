const express = require('express')

const path = require('path')
const basePath = path.join(__dirname,'templates')
const port = 3000

const app = express()


app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`,()=>{})
})

app.listen(port,()=>{
    console.log("rodando")
})