const http = require("http");

const server = http.createServer((req,res)=>{
    const urlInfo = require("url").parse(req.url,true)
    const name  = urlInfo.query.name
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    
    if(!name){
        res.end(`<h1>Your name: </h1><form method='get'><input type='text' name='name'/><input type='submit'/ value='enviar'></form>`)
    }else{
        res.end(`<h1>welcome ${name}!</h1>`)
    }
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log("rodando na porta",PORT);
})
