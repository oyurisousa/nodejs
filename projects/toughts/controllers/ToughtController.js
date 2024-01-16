const Tougth = require("../models/Tought")
const User = require("../models/User")

module.exports = class ToughtController{
    static async showToughts(req,res){
        res.render("toughts/home")
    }

    static async dashboard(req,res){
        res.render("toughts/dashboard")
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