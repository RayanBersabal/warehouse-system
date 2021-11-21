const express = require('express');
const router = express.Router();
const Product = require('../controllers/productController')

router.get('/', Product.getAllProduct)
router.get('/:id', Product.getOneProduct)
router.post('/', Product.createProduct)
router.put('/:id', Product.updateProduct)
router.delete('/:id', Product.deleteProduct)

module.exports = router;