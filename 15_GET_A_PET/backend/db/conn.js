const mongoose = require("mongoose")

async function main(){
    await mongoose.connect("mongodb+srv://root:iruysousa@cluster0.dceitcl.mongodb.net/get_a_pet?retryWrites=true&w=majority")
    console.log("connected to mongoose")
}
main().catch((err)=> console.log(err))

module.exports = mongoose