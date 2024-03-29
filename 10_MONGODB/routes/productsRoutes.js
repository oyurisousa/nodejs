const express = require("express")
const router = express.Router()

const ProductController = require('../controllers/productController')

router.get('/edit/:id', ProductController.viewEditProduct)
router.post('/edit', ProductController.updateProdct)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductSave)
router.get('/:id', ProductController.singleProduct)
router.get('/', ProductController.showProducts)

module.exports = router