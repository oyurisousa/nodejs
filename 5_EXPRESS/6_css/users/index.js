const express = require("express")
const path = require("path")

const router = express.Router()

let basePath = path.join(__dirname,"../templates") 


router.get("/add",(req,res)=>{
    const id = req.params.id
    res.sendFile(basePath+"/userForm.html")
})

router.post("/save",(req,res)=>{
    const [name,age] = [req.body.name,req.body.age]
    res.send(`${name} - ${age} `)
})

router.get("/:id",(req,res)=>{
    res.sendFile(basePath+"/users.html")
})

module.exports = router