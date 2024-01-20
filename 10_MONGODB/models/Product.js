const conn = require('../db/conn')

class Product{
    constructor(name,price,description){
        this.name = name
        this.price = price
        this.description = description
    }

    async save(){
        const database = conn.db('project_node');
        const collection =  database.collection('products')
        const product = collection.insertOne({
            name: this.name,
            price: this.price,
            description: this.description,
        })
        return product
    }
    
}

module.exports = Product