const express = require('express');
const router = express.Router();
const item = require('../controllers/itemController')

router.get('/', item.getAllItem)
router.get('/:id', item.getItemById)
router.post('/', item.createItem)
router.put('/:id', item.updateItem)
router.delete('/:id', item.deleteItem)

module.exports = router;
