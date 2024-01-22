const conn = require('../db/conn')
const database = conn.db('project_node');
const collection =  database.collection('products')
const {ObjectId} = require('mongodb')

class Product{
    constructor(name,image,price,description){
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }

    save(){
        // const database = conn.db('project_node');
        // const collection =  database.collection('products')
        const product = collection.insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description,
        })
        return product
    }

    static getProducts(){
        const products = collection.find().toArray()
        return products

    }

    static async getSingleProduct(id){
        const product = await collection.findOne({_id: new ObjectId(id)})
        return product
    }
    
}

module.exports = Product