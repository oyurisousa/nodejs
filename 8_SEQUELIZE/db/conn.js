const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('nodesequelize','node', 'Iruysousa:2004',{
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize