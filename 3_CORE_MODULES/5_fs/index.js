const http = require("http");
const fs = require("fs")

const server = http.createServer((req,res)=>{
    fs.readFile("index.html", (err, data)=>{
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log("rodando na porta",PORT);
})
