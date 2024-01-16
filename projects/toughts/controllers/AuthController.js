const User = require("../models/User")

const bcrypt = require("bcryptjs")
const { use } = require("../routes/authRoutes")


module.exports = class AuthController{
    static viewLogin(req,res){
        res.render("auth/login")
    }
    
    static async login(req,res){
        const {email, password} = req.body

        //user exists
        const user = await User.findOne({where: {email}})
        if(!user){
            req.flash("message", "No user registred with this email, try again!")
            res.render("auth/login")
            return
        }

        //match password
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if(!passwordMatch){
            req.flash("message", "password incorrect, try again!")
            res.render("auth/login")
            return
        }
        req.session.userid = user.id

        req.flash('message', 'login sucessfully!')
        req.session.save(() => {
            res.redirect('/')
        })
        
    }
    static viewRegister(req,res){
        res.render("auth/register")
    }
    
    static confirmPassword(password, confirmPassword){
        return (password == confirmPassword) ? true : false
    }    
    
    static async register(req,res){
        
        const {name,email,password,confirmpassword} = req.body
        
        //validation equal
        if(password != confirmpassword){
            req.flash("message","passwords don't match, try again!")
            res.render("auth/register")

            return
        }

        //check if exists
        const checkIfUserExists = await User.findOne({where: {email}})

        if(checkIfUserExists){
            req.flash("message","this email is already registered")
            res.render("auth/register")
            return
        }
    
        //create a password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password : hashedPassword
        }
        User.create(user)
        .then((user) => {
            // initialize session
            req.session.userid = user.id

           console.log('salvou dado')
           console.log(req.session.userid)

            req.session.userid = user.id

            req.flash('message', 'Cadastro realizado com sucesso!')

            req.session.save(() => {
                res.redirect('/')
            })
        })
      .catch((err) => console.log(err))

    }

    static logout(req,res){
        req.session.destroy()
        res.redirect("/login")
    }
    


}
