const {DataTypes} = require("sequelize")

const db =  require("../db/conn")

const User = require("./User")

const Address = db.define("Address",{
    street: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
});

User.hasMany(Address)
Address.belongsTo(User)


module.exports = Address