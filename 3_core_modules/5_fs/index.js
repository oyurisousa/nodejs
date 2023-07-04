const http = require('http')
const port = 3000
const fs = require('fs')


const server = http.createServer((req,res)=>{
    fs.readFile("msg.html",(err,data)=>{
        res.writeHead(200,"Content-Type","text/html" )
        res.write(data)
        return res.end()
    })
    
    
})



server.listen(port, ()=>{
    console.log("rodando")
})

