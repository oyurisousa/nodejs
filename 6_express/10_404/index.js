const express = require('express')
const path  = require("path")

const basePath = path.join(__dirname,'/templates')
const port = 3000

const app = express()



const users = require('./users')
//ler o body
app.use(express.urlencoded({ 
    extended: true
}))

app.use(express.json())

//arquivos staticos
app.use(express.static('public'))


app.use('/users', users)


app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`,()=>{})
})

app.use((req,res,next)=>{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port,()=>{
    console.log("rodando")
})

