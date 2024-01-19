const exp = require("constants")
const express = require("express")
const app = express()

const path = require("path")

const users = require("./users")

app.use(
    express.urlencoded({
        extended: true,

    })
)
app.use(express.json())
app.use(express.static("public"))


const PORT = 3000
let basePath = path.join(__dirname,"templates") 

app.use("/users", users)

app.get("/",(req,res)=>{
    res.sendFile(basePath+"/index.html")
})

app.use(function (req,res,next){
    res.status(404).sendFile(basePath+"/404.html")
})

app.listen(PORT,(err)=>{
    console.log("runring...")
})
console.log(basePath)