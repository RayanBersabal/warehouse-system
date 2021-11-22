const express = require('express');
const router = express.Router();
const admin = require('./adminRoute')
const item = require('./itemRouter')
const category = require('./cateRouter')
// const stockIn = require('./stockInRouter')
// const stockOut = require('./stockOutRouter')

router.use('/admin', admin)
router.use('/items', item)
router.use('/categories', category)
// router.use('/stockin', stockIn)
// router.use('/stockout', stockOut)


module.exports = router;