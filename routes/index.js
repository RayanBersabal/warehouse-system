const express = require('express');
const router = express.Router();
const product = require('./productRoute')
const user = require('./userRoute')

router.use('/users', user)
router.use('/products', product)

module.exports = router;