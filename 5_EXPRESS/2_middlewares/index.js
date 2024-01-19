const express = require("express")
const app = express()

const path = require("path")

const PORT = 3000
let basePath = path.join(__dirname,"templates") 

const checkAuth = function (req,res,next){
    req.authStatus = true
    if(req.authStatus){
        console.log("is logged in, you can proceed!")
        next()
    }else{
        console.log("is not logged in, you cannot proceed!")
    }
}

app.use(checkAuth)

app.get("/",(req,res)=>{
    res.sendFile(basePath+"/index.html")
})
app.listen(PORT,(err)=>{
    console.log("runring...")
})
console.log(basePath)
     