const express = require('express')
const router = express.Router()

const path = require('path')

const basePath = path.join(__dirname,'../templates')

router.get("/add",(req,res)=>{
    res.sendFile(`${basePath}/usersForm.html`)
})

router.post("/save",(req,res)=>{
    console.log(req.body)
    res.sendFile(`${basePath}/usersForm.html`)
})

router.get('/:id',(req,res)=>{
    //const id = req.params.id
    const { id } = req.params
    console.log(`${id}`)
    res.sendFile(`${basePath}/users.html`)
})


module.exports = router
