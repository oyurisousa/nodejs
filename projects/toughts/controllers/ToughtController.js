const Tougth = require("../models/Tought")
const User = require("../models/User")

module.exports = class ToughtController{
    static async showToughts(req,res){
        res.render("toughts/home")
    }

    static async dashboard(req,res){
        const toughts = await Tougth.findAll({
            raw: true,
            where: {
                UserId : req.session.userid
            }
        })
        
        res.render("toughts/dashboard",{toughts})
    }

    //crud
    static async viewUpdate(req,res){
        const tought = await Tougth.findOne({
            raw: true,
            where:{
                id: req.params.id
            }
        })
        console.log("here:", tought)
        res.render("toughts/edit", {tought})

    }

    static async update(req,res){
        const {id, title} = req.body
        
        const tought = {
            title: title
        }

        try{
            await Tougth.update(tought,{where: {id}})
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
            await Tougth.create(tought)
            req.flash("message", "toughts registred sucessfully!")
            req.session.save(()=>{
                res.redirect("/toughts")
            })
        }catch(err){
            console.error(err)
        }

    }
}