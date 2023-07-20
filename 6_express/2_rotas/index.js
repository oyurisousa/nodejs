const express = require('express')
const port = 3000
const app = express()


app.get('/',(req,res)=>{
    res.send('hello word!')
})

app.listen(port,()=>{
    console.log("rodando")
})