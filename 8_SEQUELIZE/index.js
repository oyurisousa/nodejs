const express = require("express")
const exphbs = require("express-handlebars")
const conn = require('./db/conn')
const users = require('./users')
const address = require("./address")

const User = require("./models/User")
const Address = require("./models/Address")

const app = express()

const PORT = 3300
app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.use(express.static('public'))


app.use("/address", address)
app.use("/users", users)

app.get("/",(req,res)=>{
    res.render("home")
    
})

conn.sync()
.then(()=>{
    app.listen(PORT,()=>{
        console.log("run on port 3000")
    })
}).catch((err)=>{
    console.error(err)
})
    