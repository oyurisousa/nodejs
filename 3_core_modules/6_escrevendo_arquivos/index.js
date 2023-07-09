const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    
    if(!name){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.readFile("index.html",(err,data)=>{
            
            return res.end(data)
        })
    }else{
        res.writeHead(302,{
            Location : '/'
        })
        fs.writeFile('arquivo.txt',`${name}\n`,(err)=>{})
        res.end()
    }
})

server.listen(port,()=>{
    console.log("rodando")
})