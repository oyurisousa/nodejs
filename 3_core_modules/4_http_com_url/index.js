const http = require('http')
const port = 3000



const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    
    res.statusCode =  200
    res.setHeader('Content-Type','text/html')
    if(!name){
        res.end("<form method='get'><input type='text' name='name'><input type='submit'><form>")
    }else{
        res.end(`<h2>Bem vido ${name}</h2>`)
    }
})



server.listen(port, ()=>{
    console.log("rodando")
})

