const express = require("express")
const cors = require("cors")
const conn = require("./db/conn")
const app = express()
const UserRoutes = require("./routes/UserRoutes")

//config Json response
app.use(express.json())

//solve cors
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000/'
}))

//public folder for images
app.use(express.static('public')) 

//routes
app.use( "/users",UserRoutes)
app.listen(5000)