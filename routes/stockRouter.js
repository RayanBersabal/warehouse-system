const express = require('express');
const router = express.Router();
const stock = require('../controllers/stockController')

router.post('/in/:id', stock.addStockIn)
router.post('/out/:id', stock.addStockOut)

module.exports = router;