const express = require("express")
const router = express.Router()

const ProductController = require('../controllers/productController')

router.get('/', ProductController.showProducts)

module.exports = router