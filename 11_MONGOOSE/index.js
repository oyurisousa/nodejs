const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require("./db/conn")

const productsRoutes  = require('./routes/productsRoutes')

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//req body, body parser...
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//static files
app.use(express.static('public'))

app.use('/products', productsRoutes)


app.listen(3000)