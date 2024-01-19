const express = require("express")
const router = express.Router()
const User = require('../models/User')
const Address = require("../models/Address")




router.post('/remove/:id',async(req,res)=>{
    let id  = req.params.id
    let UserId = req.body.UserId
    await User.destroy({where:{id: id}})
    res.redirect('/users/edit/'+UserId)
})

router.post("/edit/:id",async(req,res)=>{
    let user = {
        id : req.params.id,
        name : req.body.name,
        occupation: req.body.occupation,
        newsletter : (req.body.newsletter == 'on') ? true : false
    }
    await User.update(user,{where:{id:user.id}})
    
    res.redirect("/users")
})

router.get("/edit/:id",async(req,res)=>{
    let id = Number(req.params.id)
    try{
        let user = await User.findOne({include: Address, where:{id:id}})
        console.log((user) ? user : "not found")
        
        user.dataValues.newsletter =   (user.dataValues.newsletter == 1) ? 'checked' : ''
        res.render("userEdit",{user: user.get({plain: true})})
    }catch(err){
        console.error(err)
    }
})

router.post('/create',async (req,res)=>{
    let [name,occupation] = [
        req.body.name,
        req.body.occupation,
    ]
    let newsletter = (req.body.newsletter == 'on') ? true : false
    console.log(name,occupation,newsletter)
    
    await User.create({name,occupation,newsletter})
    res.redirect('/')
    
})
router.get('/',async (req,res)=>{
    let users = await User.findAll({raw: true})
    
    
    res.render("users",{users})
})

module.exports = router