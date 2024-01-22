const Product = require('../models/Product')


module.exports = class ProductController{
    static async showProducts(req,res){
        const products = await Product.getProducts()
        console.log(products)
        res.render("products/all",{products})
    }

    static createProduct(req,res){
        res.render('products/create')
    }
    static createProductSave(req,res){
        const {name,image, price, description} = req.body
        const product = new Product(name, image,price, description)
        product.save()
        res.redirect('/products')
    }

    static async singleProduct(req,res){
        const id = req.params.id
        const product = await Product.getSingleProduct(id)
        console.log(product)
        res.render("products/product", {product})
    }

    static async removeProduct(req,res){
        const id = req.params.id
        await Product.delete(id)
        res.redirect("/products")
    }

    
}