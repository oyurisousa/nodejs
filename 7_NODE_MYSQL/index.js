const express = require("express")
const exphbs = require("express-handlebars")

const books = require("./books")

const app = express()

const PORT = 3000

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
app.use(express.static('public'))

app.use('/books',books)

app.get("/",(req,res)=>{
    res.render("home")
    
})

app.listen(PORT,()=>{
    console.log("run on port 3000")
})