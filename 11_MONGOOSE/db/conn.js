const mongoose = require("mongoose")

async function main(){
    await mongoose.connect("mongodb+srv://root:iruysousa@cluster0.dceitcl.mongodb.net/?retryWrites=true&w=majority")
}
main().catch((err)=> console.log(err))

module.exports = mongoose