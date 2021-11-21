const express = require('express');
const router = express.Router();
const product = require('./productRoute')
const admin = require('./adminRoute')

router.use('/admin', admin)
router.use('/products', product)

module.exports = router;