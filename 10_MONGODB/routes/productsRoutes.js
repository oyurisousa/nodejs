const express = require("express")
const router = express.Router()

const ProductController = require('../controllers/productController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductSave)
router.get('/', ProductController.showProducts)

module.exports = router