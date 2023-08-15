import express from 'express';
import { engine } from 'express-handlebars';
import mysql from 'mysql'


const app = express();

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.post('/books/insertbook',(req,res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title,pageqty) VALUES('${title}','${pageqty}')`

    conn.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.post('/books/editbook/:id',(req,res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty
    const id = req.params.id

    const sql = `UPDATE books SET title = "${title}", pageqty = "${pageqty}" WHERE id = ${id}`

    conn.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/books/edit/:id',(req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id=${id}`

    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
        const book = data[0]
        res.render('editbook',{book})
    })
})

app.get('/book/:id',(req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id=${id}`

    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
        const book = data[0]
        res.render('book',{book})
    })
})


app.get('/books',(req,res)=>{
    const sql = "SELECT * FROM books"
    conn.query(sql,(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books',{books})
    })
})

app.get('/', (req, res) => {
    res.render('home');
});

//mysql config
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