const mysql = require("mysql2")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "node",
    password: 'Iruysousa:2004',
    database: "nodemysql",
})

module.exports = pool