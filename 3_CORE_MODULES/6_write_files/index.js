const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res)=>{
    const urlInfo = require("url").parse(req.url,true)
    const name  = urlInfo.query.name
    const age = urlInfo.query.age
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    
    if(!name || !age){
        fs.readFile("index.html", (err, data)=>{
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        fs.writeFile("data.txt",`${name} - ${age}` ,(err, data)=>{
            res.writeHead(302,{
                location: "/"
            })
            return res.end()
        })
    }
    
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log("rodando na porta",PORT);
})
