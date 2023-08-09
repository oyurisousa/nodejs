import express from 'express';
import { engine } from 'express-handlebars';
import mysql from 'mysql'


const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});




const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("conectado!")
    app.listen(3000);
})