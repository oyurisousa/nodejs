const { MongoClient } = require("mongodb")

const uri = 'mongodb://localhost:27017/testeMongo'

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect
        console.log("connected to mongodb!")
    }catch(err){
        console.error(err)
    }
}

run()
module.exports = client