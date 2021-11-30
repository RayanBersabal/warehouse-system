const express = require('express');
const router = express.Router();
const stock = require('../controllers/stockController')
const { loginCheck } = require('../middlewares/authentication')

router.post('/in/:id', stock.addStockIn)
router.post('/out/:id', stock.addStockOut)

module.exports = router;