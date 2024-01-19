const express = require("express")

const router = express.Router()
const pool = require('../db/conn')

router.post('/delete/:id',(req,res)=>{
    const id = req.params.id
    let sql = `
            DELETE FROM books WHERE ?? = ?;`

    let data = ['id',id]
    
    pool.query(sql,data,(err)=>{
        if(err){
            console.error(err)
        }
        console.log("book deleted sucessfully!")
        res.redirect('/')
    })
})


router.post('/insert',(req,res)=>{
    const [title,page_quant] = [req.body.title, req.body.page_quant]
    let sql = `INSERT INTO books(??,??) VALUES(?,?);`
    let data = ['title','page_quant',title,page_quant]
    pool.query(sql,data,(err)=>{
        if(err){
            console.error(err)
        }
        console.log("book insert sucessfully!")
        res.redirect('/')
    })
})
router.post('/update',(req,res)=>{
    const [id,title,page_quant] = [req.body.id,req.body.title, req.body.page_quant]
    let sql = `
            UPDATE books SET ?? = ?,  ?? = ? WHERE ?? = ?;`
    
    let data = ['title',title,'page_quant',page_quant,'id',id]
    pool.query(sql,data,(err)=>{
        if(err){
            console.error(err)
        }
        console.log("book update sucessfully!")
        res.redirect('/')
    })
})
router.get('/update/:id',(req,res)=>{
    let sql = `SELECT * FROM books WHERE ?? = ?;`
    let data = ['id',req.params.id]
    pool.query(sql,data,(err,data)=>{ 
        if(err){
            return err
        }
        
        res.render("updateBook",{book:data[0]})
        
    })
    
})

router.get("/",(req,res)=>{

    let sql = `SELECT * FROM books;`

    pool.query(sql,(err,data)=>{
        if(err){
            return console.error(err)
        }

        let books = data
        
        res.render('books',{books})
    })
})


module.exports = router
