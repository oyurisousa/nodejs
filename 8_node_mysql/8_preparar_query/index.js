import express from 'express';
import { engine } from 'express-handlebars';
import pool from './db/conn.js'


const app = express();

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



app.post('/book/delete/:id',(req,res)=>{
    const id  = req.params.id

    const sql = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]
    pool.query(sql,data,(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        res.redirect('/')

    })
})


app.post('/books/insertbook',(req,res)=>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (??,??) VALUES(?,?)`
    const data = ['title', 'pageqty',title,pageqty]

    pool.query(sql,data,(err)=>{
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

    const sql = `UPDATE books SET ?? =  ?, ?? = ? WHERE ?? = ?`
    const data = ['title',title,'pageqty',pageqty,'id',id]
    pool.query(sql,data,(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/books/edit/:id',(req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id',id]
    pool.query(sql,data,(err,data)=>{
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

    const sql = `SELECT * FROM books WHERE ?? = ?`
    const data = ['id',id]

    pool.query(sql,data,(err,data)=>{
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
    pool.query(sql,(err,data)=>{
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
app.listen(3000)