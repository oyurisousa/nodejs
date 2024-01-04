const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
const conn = require("./db/conn")

const tasksRoutes = require("./routers/tasksRoutes")

const Task = require("./models/Task")

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static('public'))



app.use('/tasks', tasksRoutes)

app.get("/", (req,res)=>{
    res.render("home")
})

conn
    .sync()
    .then(()=>{
        app.listen(3000)
        console.log("ok!")
    })
    .catch((err)=>{
        console.error(err)
})