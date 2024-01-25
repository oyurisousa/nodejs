const { MongoClient } = require("mongodb")

const uri = 'mongodb+srv://root:iruysousa@cluster0.dceitcl.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        
        console.log("connected to mongodb!")
    }catch(err){
        console.error(err)
    }
}

run()
module.exports = client