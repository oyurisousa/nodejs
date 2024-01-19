const Tought = require("../models/Tought")
const User = require("../models/User")

const {Op, or} = require('sequelize')
module.exports = class ToughtController{
    static async showToughts(req,res){
        let search = ''
        if(req.query.search){
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old'){
            order = 'ASC'
        }else{
            order = 'DESC'
        }
        
        const toughtsData = await Tought.findAll({
            include: User,
            where: {
                title: {
                    [Op.like] : `%${search}%`
                }                
            },
            order: [['CreatedAt', order]]
        })
        const toughts = toughtsData.map((result)=>result.get({
            plain: true
        }))
        console.log(toughts)
        let toughtsQty = toughts.length

        if(toughtsQty === 0){
            toughtsQty = false
        }

        res.render("toughts/home",{toughts, search, toughtsQty})
    }

    static async dashboard(req,res){
        const userId = req.session.userid
        const user = await User.findOne({
            where: {
                id : userId
            },
            include: Tought,
            plain: true
        })

        if(!user){
            res.redirect("/login")
        }
        const toughts = user.Toughts.map((result)=>result.dataValues)
        
        let emptyToughts = false
        if(toughts.length == 0){
            emptyToughts = true
        }
        res.render("toughts/dashboard",{toughts, emptyToughts})
    }

    static async remove(req,res){
        const id = req.body.id
        const UserId = req.session.userid
        try{
            await Tought.destroy({where: {id, UserId}})
            req.flash("message","delete sucessfully!")
            req.session.save(()=>{
                res.redirect("/toughts/dashboard")
            })
        }catch(err){
            console.error("destroy here!")
        }

    }

    static async viewUpdate(req,res){
        const tought = await Tought.findOne({
            raw: true,
            where:{
                id: req.params.id
            }
        })
        res.render("toughts/edit", {tought})

    }

    static async update(req,res){
        const {id, title} = req.body
        
        const tought = {
            title: title
        }

        try{
            await Tought.update(tought,{where: {id}})
            req.flash("message","Thought updated sucessfully!")
            req.session.save(()=>{
                res.redirect("/toughts/dashboard")
            })

        }catch(err){
            console.error(err)
        }
    }

    static async viewAdd(req,res){
        res.render("toughts/add")
    }

    static async add(req,res){
        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }
        try{
            await Tought.create(tought)
            req.flash("message", "toughts registred sucessfully!")
            req.session.save(()=>{
                res.redirect("/toughts/dashboard")
            })
        }catch(err){
            console.error(err)
        }

    }
} 