const exp = require("constants")
const express = require("express")
const app = express()

const path = require("path")


app.use(
    express.urlencoded({
        extended: true,

    })
)
app.use(express.json())
const PORT = 3000
let basePath = path.join(__dirname,"templates") 

app.post("/users/save",(req,res)=>{
    const [name,age] = [req.body.name,req.body.age]
    res.send(`${name} - ${age} `)
})

app.get("/users/add",(req,res)=>{
    const id = req.params.id
    res.sendFile(basePath+"/userForm.html")
})

app.get("/",(req,res)=>{
    res.sendFile(basePath+"/index.html")
})
app.listen(PORT,(err)=>{
    console.log("runring...")
})
console.log(basePath)