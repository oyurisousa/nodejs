const http = require("http");

const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    res.end("<h1>Olá mundo._></h1>")
})


server.listen(PORT,()=>{
    console.log("rodando na porta",PORT);
})