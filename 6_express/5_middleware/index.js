const express = require('express')

const path = require('path')
const basePath = path.join(__dirname,'templates')
const port = 3000

const app = express()

const check_auth = (req,res,next)=>{
    req.authStatus = true
    if(req.authStatus){
        console.log("está logado")
        next()
    }else{
        console.log("não está logado")
        next()
    }
}

app.use(check_auth)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`,()=>{})
})

app.listen(port,()=>{
    console.log("rodando")
})