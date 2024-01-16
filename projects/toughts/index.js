const express = require("express")
const exphbs  =require("express-handlebars")
const session = require("express-session")
const FileStore = require("session-file-store")(session)
const flash = require("express-flash")

//db
const conn = require("./db/conn")

//models
const Tought = require("./models/Tought")
const User = require("./models/User")
const toughtsRoutes = require("./routes/toughtsRoutes")
const authRoutes = require("./routes/authRoutes")
const ToughtController = require("./controllers/ToughtController")

const app = express()       
// define the session before everything that depends on it
app.use(
    session({
        name: 'session',
        secret: 'our_secret',
        resave: false,
        store: new FileStore({
            logFn: function(){},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
        } 
    })
)

//template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

//flash messages
app.use(flash())

//static
app.use(express.static('public'))

//set session to res
app.use((req, res, next) => {
	if (req.session && req.session.userid) {
		res.locals.session = req.session;
	}
	next();
})

//body parser
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//session
//routes
app.use("/", authRoutes)
app.use("/toughts",toughtsRoutes)
app.use("/", ToughtController.showToughts)
conn.sync(
    app.listen(3000,()=>{
        console.log("connected on server!")
    })
).catch((err)=>{
    console.error("a exception in server:", err)
})


