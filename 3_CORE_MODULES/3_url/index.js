const url = require("url")
const address = "https://www.google.com/search?q=oi"
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.pathname)
console.log(parsedUrl.searchParams.get("oi"))

