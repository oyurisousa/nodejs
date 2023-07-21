const express = require('express')

const path = require('path')
const basePath = path.join(__dirname,'templates')
const port = 3000

const app = express()


app.get('/users/:id',(req,res)=>{
    //const id = req.params.id
    const { id } = req.params
    console.log(`${id}`)
    res.sendFile(`${basePath}/users.html`)
})



app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`,()=>{})
})

app.listen(port,()=>{
    console.log("rodando")
})