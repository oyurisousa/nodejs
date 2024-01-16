const {Sequelize} = require("sequelize")

const PASSWORD = 'Iruysousa:2004'

const sequelize = new Sequelize('toughts', 'node', PASSWORD,{
    host : 'localhost',
    dialect: "mysql"
})

try{
    sequelize.authenticate()
    console.log("connected on mysql!")
}catch(err){
    console.error(`A exception here: ${err}`)

}

module.exports = sequelize