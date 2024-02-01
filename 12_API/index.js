const express = require("express")

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

//routes
app.post('/createproduct', (req,res)=>{
    const {name, price} = req.body
    
    if(!name){
        res.status(422).json({message: "name not found"})
    }
    console.log(name, price)

    res.status(201).json({message: `the product ${name} cost ${price} `})
})
app.get('/', (req,res)=>{
    res.status(200).json({message: 'first route created sucessfully!'})
})

app.listen(3000)