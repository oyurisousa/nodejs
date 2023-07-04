const http = require('http')
const port = 3000

const url = require('url')
const address = 'http://google.com/?q=oi'
const parseurl = new url.URL(address)

const server = http.createServer((req,res)=>{
    res.statusCode =  200
    res.setHeader('Content-Type','text/html')
    console.log(parseurl.host)
    console.log(parseurl.pathname)
    console.log(parseurl.search)
    console.log(parseurl.searchParams)
    console.log(parseurl.searchParams.get('q'))
    res.end()
})



server.listen(port, ()=>{
    console.log("rodando")
})


