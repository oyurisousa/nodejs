const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("mvc", "node","Iruysousa:2004",{
    host: "localhost",
    dialect: "mysql"
})


try{
    sequelize.authenticate()
    console.log("Connected on mysql")
}catch(err){
    console.error(err)    
}

module.exports = sequelize
