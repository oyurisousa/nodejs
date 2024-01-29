const creatUserToken = require("../helpers/create-user-token")
const User = require("../models/User")
const bcrypt = require("bcrypt")

module.exports = class UserController{
    static async register(req,res){
        const {name, email, phone, password, confirmPassword} = req.body
        
        //validations fields
        if(!name){
            res.status(422).json({message: "the name field is required"})
            return
        }
        if(!email){
            res.status(422).json({message: "the email field is required"})
            return
        }
        if(!phone){
            res.status(422).json({message: "the phone field is required"})
            return
        }
        if(!password){
            res.status(422).json({message: "the password field is required"})
            return
        }
        if(!confirmPassword){
            res.status(422).json({message: "the confirm password field is required"})
            return
        }else if(password !== confirmPassword){
            res.status(422).json({message: "passwords don't match!"})
        }
        //check if user existss
        const userExists = await User.findOne({email: email})
        
        if(userExists){
            res.status(422).json({message: "User exists"})
            return
        }

        //create a password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)


        //create user
        const user = new User({
            name,
            email,
            phone,
            password: passwordHash

        })
        try {
            const newUser = await user.save() 
            await creatUserToken(newUser,req,res)
            
        } catch (error) {
            res.status(500).json({message: error})
        }
        
    }
}