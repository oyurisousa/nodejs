const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
})

readline.question("QUal sua linguagem preferida? ",(data)=>{
    console.log(data)
    readline.close()
})