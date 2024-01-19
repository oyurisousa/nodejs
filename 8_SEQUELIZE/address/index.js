const express = require("express")
const router = express.Router()
const Address = require("../models/Address")



router.post("/remove/:id", async(req,res)=>{
    const id = req.params.id
    const UserId = req.body.UserId
    await Address.destroy({where: {id: id}})

    res.redirect('/users/edit/'+UserId)
})


router.post("/create", async(req,res)=>{
    const addres = {
        UserId : req.body.UserId,
        street : req.body.street,
        number : req.body.number,
        city : req.body.city
    }

    await Address.create(addres)

    res.redirect(`/users/edit/${addres.UserId}`)
})



module.exports = router