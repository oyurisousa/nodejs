const express = require("express")
const exphbs = require("express-handlebars")

const app = express()
app.engine('handlebars', exphbs.engine())

app.set("view engine", "handlebars")
app.use(express.static("public"))
const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

const PORT = 3000;

const itens = ['html','css',"js"]
const users = {
    name : 'yuri',
    age : 19
}

app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{itens,users, auth: true})
})
app.get("/",(req,res)=>{
    res.render("home",{nome:"yuri", auth:true, users:users})
})

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});