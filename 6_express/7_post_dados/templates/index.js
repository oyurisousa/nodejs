const express = require('express')

const path = require('path')
const basePath = path.join(__dirname,'templates')
const port = 3000

const app = express()

//ler o body
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get("/users/add",(req,res)=>{
    res.sendFile(`${basePath}/usersForm.html`)
})

app.post("/users/save",(req,res)=>{
    console.log(req.body)
    res.sendFile(`${basePath}/usersForm.html`)
})

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

